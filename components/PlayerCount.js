import React from "react";
import useSWR from "swr";
import { server } from "../config";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function PlayerCount() {
  const { data, error } = useSWR(
    `https://mcapi.us/server/status?ip=${server.ip}`,
    fetcher
  );

  if (error) return "";
  if (!data) return "";

  return (
    <div className="uppercase text-sm font-semibold text-red-400">
      {data?.online
        ? `${data?.players?.now.toLocaleString()} players online`
        : "Server offline!"}
    </div>
  );
}

export function NumberPlayers() {
  const { data, error } = useSWR(
    `https://mcapi.us/server/status?ip=${server.ip}`,
    fetcher
  );

  if (error || !data) return "0";
  return [data?.players?.now.toLocaleString()];
}
