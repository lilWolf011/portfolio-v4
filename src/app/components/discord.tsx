"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default function Discord() {
  const [discordstatus, setDiscordstatus] = useState("");
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [globalname, setGlobalname] = useState("");
  const [album, setAlbum] = useState("");
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [album_art_url, setAlbum_art_url] = useState("");
  const [trackid, setTrackid] = useState("");
  const [loading, setLoading] = useState(true);
  const [spot, setSpot] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.lanyard.rest/v1/users/535117705854844940")
      .then((response) => {
        setDiscordstatus(response.data.data.discord_status);
        const { spotify } = response.data.data;
        const { discord_user } = response.data.data;
        console.log(discord_user);
        setAvatar(
          `https://cdn.discordapp.com/avatars/535117705854844940/${discord_user.avatar}`
        );
        setUsername(discord_user.username);
        setGlobalname(discord_user.global_name);
        console.log(discord_user);
        if (spotify != null) {
          //console.log(spotify);
          setAlbum(spotify.album);
          setAlbum_art_url(spotify.album_art_url);
          setSong(spotify.song);
          setArtist(spotify.artist);
          setTrackid(spotify.track_id);
          setLoading(false);
          setSpot(false);
        } else {
          setSpot(true);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen grid place-content-center">
      <div className="flex flex-col border-solid border-2 border-[#1f1f1f46] rounded-lg bg-[#12121233] shadow-xl shadow-[#1515152b] p-4 space-y-2 w-[50%]">
        <div>
          <Image
            src={avatar}
            width={100}
            height={100}
            quality={100}
            priority={true}
            alt="AlbumArt"
            className="rounded-full border-solid border-gray-700 pointer-events-none"
          />
          <svg
            className={`absolute w-5 mt-[-22px] ml-[70px] outline outline-offset-0 outline-3 rounded-full outline-[#121212]`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill={
                discordstatus === "dnd"
                  ? "#F23F43"
                  : discordstatus === "online"
                  ? "#23A55A"
                  : discordstatus === "idle"
                  ? "#F0B232"
                  : "#797D87"
              }
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
            />
          </svg>
        </div>
        <span>
          <h1 className="font-semibold text-xl">{globalname}</h1>
          <h1 className="text-gray-500 font-semibold text-sm">{username}</h1>
        </span>
        <hr className="w-[100%] h-[0.7px] border border-solid border-gray-800" />
        <p className="w-[100%]">Hey there! I'm lil Wolf, a frontend wizard passionate about crafting
          stunning digital experiences with the power of code and design.</p>
        <hr className="w-[100%] h-[0.7px] border border-solid border-gray-800" />
        {spot == false ? (
          <Link
            href={`spotify:track:${trackid}`}
            className="border-none text-left"
          >
            <section className="flex items-center p-4 rounded-md bg-[#151414ad] shadow-2xl shadow-[#151414b9] h-[120px] min-w-[320px] w-[auto] border-2 border-solid border-[#14141437]">
              <Image
                src={album_art_url}
                width={100}
                height={100}
                quality={100}
                loading="lazy"
                alt="AlbumArt"
                className="rounded-md border-solid border-gray-700 pointer-events-none"
              />
              <hr className="ml-2 w-[0.7px] h-[100px] border border-solid border-gray-800" />
              <div className="flex flex-col pl-2 text-gray-500">
                <h1 className="text-white">{song}</h1>
                <article>
                  <span className="text-gray-400 font-light">by</span>{" "}
                  <span>{artist}</span>
                </article>
                <article className="line-clamp-3">
                  <span className="text-gray-400 font-light">on</span>{" "}
                  <span>{album}</span>
                </article>
              </div>
            </section>
          </Link>
        ) : (
          <div className="flex items-center justify-center p-4 rounded-md bg-[#1514147e] shadow-2xl shadow-[#151414b9] h-[120px] min-w-[320px] w-[auto] border-2 border-solid border-[#14141437]">
            <span className="flex flex-col pl-2 text-gray-500">
              Not currently listening to music
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
