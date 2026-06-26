'use client';
import { useState } from 'react';

export default function Hero({ content }) {
    const [url, setUrl] = useState('');
    const [video, setVideo] = useState({});

    const handleDownload = async () => {
        const res = await fetch('/api/download', {
            method: 'POST',
            body: JSON.stringify({ url }),
        });
        const data = await res.json();
        setVideo(data);
    };

    const downloadAudio = async (audioUrl) => {
        try {
            const response = await fetch(audioUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'audio.mp3';
            document.body.appendChild(a);
            a.click();
            a.remove();
        } catch (error) {
            console.error('Download failed', error);
        }
    };

    const downloadVideo = async (videoUrl) => {
        try {
            const response = await fetch(videoUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'video.mp4';
            document.body.appendChild(a);
            a.click();
            a.remove();
        } catch (error) {
            console.error('Download failed', error);
        }
    }

    return (
        <div className="my-15 md:my-30 mx-5 md:mx-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-items-center lg:justify-items-end">
                <div>
                    <h1 className="text-5xl font-bold text-white">{content.title} <span className="text-orange-400">{content.subtitle}</span></h1>
                    <p className="text-lg my-4 text-neutral-400">
                       {content.description}
                    </p>
                    <div className="join mb-4 text-neutral-700 border border-neutral-700 bg-neutral-900 rounded-3xl p-2 w-full">

                        <input
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            type="text"
                            placeholder={content.placeholder}
                            className="input w-full text-neutral-700 input-ghost bg-transparent focus:outline-none"
                        />

                        <button onClick={handleDownload} className="btn btn-ghost bg-orange-400 border-0 join-item rounded-3xl text-white">{content.search_btn}</button>
                    </div>

                    <label className="label">
                        <p className="label-text text-neutral-400">{content.span} :</p>
                        <a onClick={() => video?.data?.play && downloadAudio(video.data.music)} className="text-xs text-neutral-400 bg-neutral-900 rounded-xl p-2 link link-hover">{content.download_btn}</a>
                    </label>
                </div>
                <div className="border relative border-neutral-700 bg-neutral-900 rounded-2xl overflow-hidden w-full" style={{ maxWidth: "289px", height: "514px" }}>
                    {video?.data?.play && (
                        <video
                            controls
                            autoPlay
                            playsInline
                            webkit-playsinline="true"
                            src={video?.data?.play}
                            title={video?.data?.title}
                            className="w-full h-full object-cover border-none"
                        ></video>
                    )}
                    <span className='flex absolute items-center justify-center z-50 inset-0'>
                        <button disabled={!video?.data?.play} onClick={() => video?.data?.play && downloadVideo(video.data.play)} className='btn btn-ghost rounded-full  bg-orange-400 border-0 text-white'>
                            <i className="fa-solid fa-download"></i> {content.download_mp4}
                        </button>
                    </span>
                </div>
            </div>

        </div>
    )
}
