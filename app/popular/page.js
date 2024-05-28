
'use client';
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { CardsList } from "../components/CardsList/CardsList"; // удалить
import { CardsListSection } from "../components/CardsList/CardsListSection";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function New() {
  const newGames = useGetDataByCategory(endpoints.games, "popular");
  return (
    <main className="main-inner">
        {/* Используем CardsListSection вместо CardsList */}
      {newGames ? <CardsListSection id="popular" title="Популярные" data={newGames} /> : <Preloader />}
    </main>
  );
} 