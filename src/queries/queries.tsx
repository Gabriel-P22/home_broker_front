import { Asset, AssetDaily, Order, Wallet } from "../model";

export async function getAssets(): Promise<Asset[]> {
  const response = await fetch(`http://localhost:3001/assets`);
  return response.json();
}

export async function getMyWallet(walletId: string): Promise<Wallet> {
  const response = await fetch(`http://localhost:3001/wallets/${walletId}`);

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export async function getOrders(walletId: string): Promise<Order[]> {
  const response = await fetch(
    `http://localhost:3001/orders?walletId=${walletId}`
  );
  return response.json();
}

export async function getAssetDailies(
  assetSymbol: string
): Promise<AssetDaily[]> {
  const response = await fetch(
    `http://localhost:3001/assets/${assetSymbol}/dailies`
  );
  return response.json();
}