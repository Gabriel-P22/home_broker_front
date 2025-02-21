'use client'
import { Asset } from "@/model";
import { socket } from "@/socket-io";
import { useAssetStore } from "@/store";
import { useEffect } from "react";

export function AssetSync(props: { assetSymbols: string[] }) {
    
    const { assetSymbols } = props;
    const changeAsset = useAssetStore((state) => state.changeAsset)
    
    useEffect(() => {
        socket.connect();

        socket.emit("joinAssets", { symbols: assetSymbols });
        socket.on('assets/price-changed', (asset: Asset) => {
            changeAsset(asset)
        }) 

        return () => {
            socket.emit('leaveAssets', { symbols: assetSymbols });
            socket.off("assets/price-changed")
        }
    }, [assetSymbols])

    return null
}