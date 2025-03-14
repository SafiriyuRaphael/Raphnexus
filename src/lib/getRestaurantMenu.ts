export async function getRestaurantMenu(): Promise<MenuData | undefined> {
    const res = await fetch(
        'https://raw.githubusercontent.com/SafiriyuRaphael/supreme-waffle/main/restaurant.json'
      );
      
      if (!res.ok) {
        console.error(`Fetch error: ${res.status} - ${await res.text()}`);
        return undefined;
      }
      
      return res.json();
      
}
