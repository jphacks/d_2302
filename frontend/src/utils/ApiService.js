import axios from "axios"
import { backendUrl } from "../config/backendUrl"
import { urlEncodedHeader, withAuthHeader } from "../config/Headers"
import { updatedQueue } from "./Firebase"

// アカウント認証
export const postAccount = async (id, password) => {
    const body = {
        login_id: id,
        login_password: password
    }
    await axios.post(
        `${backendUrl}/auth/account`,
        body
    );
}

export const postToken = async (username, password) => {
    const body = {
        username: username,
        password: password
    }
    const response = await axios.post(
        `${backendUrl}/auth/token`,
        body,
        urlEncodedHeader
    );
    return response.data;
}

// Spotify認証
export const postRegister = async (clientId, clientSecret, token) => {
    const body = {
        spotify_client_id: clientId,
        spotify_client_secret: clientSecret
    }
    await axios.post(
        `${backendUrl}/spotify/register`,
        body,
        withAuthHeader(token)
    );
};

// キュー取得
export const getQueueInfo = async (token) => {
    const response = await axios.get(
        `${backendUrl}/music/get_queue_info`,
        withAuthHeader(token)
    );
    return response.data;
};

// 検索
export const postSearchArtistName = async (artistName, token) => {
    const body = {
        artist_name: artistName
    }
    const response = await axios.post(
        `${backendUrl}/music/search_music_by_artist_name`,
        body,
        withAuthHeader(token)
    );
    return response.data;
};

export const postSearchMusicTitle = async (title, token) => {
    const body = {
        music_title: title
    }
    const response = await axios.post(
        `${backendUrl}/music/search_music_by_title`,
        body,
        withAuthHeader(token)
    );
    return response.data;
};

// キュー追加
export const postEnqueue = async (title, token, id) => {
    const body = {
        music_title: title
    }
    await axios.post(
        `${backendUrl}/music/enqueue`,
        body,
        withAuthHeader(token)
    );
    updatedQueue(id);
};

export const postEnqueueTrackId = async (trackId, token, id) => {
    const body = {
        track_id: trackId
    }
    await axios.post(
        `${backendUrl}/music/enqueue_by_track_id`,
        body,
        withAuthHeader(token)
    );
    updatedQueue(id);
}

export const postEnqueueBasedOnMood = async (conversation, token, id) => {
    const body = {
        conversation: conversation
    }
    await axios.post(
        `${backendUrl}/music/enqueue_based_on_mood`,
        body,
        withAuthHeader(token)
    );
    updatedQueue(id);
};

// 音量調整
export const postAdjustVolume = async (volume, token) => {
    const body = {
        volume_percent: volume
    }
    await axios.post(
        `${backendUrl}/music/adjust_volume`,
        body,
        withAuthHeader(token)
    );
}