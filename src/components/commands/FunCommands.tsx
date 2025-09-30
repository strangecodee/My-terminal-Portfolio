import React from "react";

export const JokeCommand: React.FC = () => {
  const [joke, setJoke] = React.useState({ text: "", punchline: "" });
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const jokes = [
      {
        text: "Why did the DevOps engineer break up with the database?",
        punchline:
          "Because it had too many commits and he needed more space for his containers!",
      },
      {
        text: "Why do programmers prefer dark mode?",
        punchline: "Because light attracts bugs!",
      },
      {
        text: "What's a developer's favorite instrument?",
        punchline: "The keyboard, because it's always in tune with their code!",
      },
      {
        text: "Why did the computer go to therapy?",
        punchline: "It had too many unresolved issues!",
      },
      {
        text: "How many programmers does it take to change a light bulb?",
        punchline: "None, that's a hardware problem!",
      },
      {
        text: "Why don't programmers like nature?",
        punchline: "It has too many bugs!",
      },
      {
        text: "What's the object-oriented way to become wealthy?",
        punchline: "Inheritance!",
      },
      {
        text: "Why did the Kubernetes pod break up with the deployment?",
        punchline: "It needed more replicas!",
      },
      {
        text: "Why was the JavaScript developer sad?",
        punchline: "Because he didn't know how to 'null' his feelings!",
      },
    ];

    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    setJoke(randomJoke);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="space-y-2">
        <div className="text-yellow-400 font-semibold">😂 Loading Joke...</div>
        <div className="text-gray-500 text-sm">⏳ Generating humor...</div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="text-yellow-400 font-semibold">😂 Tech Joke</div>
      <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
        <p className="text-gray-300 italic">
          {joke.text}
          <br />
          {joke.punchline}
        </p>
      </div>
      <div className="text-gray-500 text-sm">
        💡 Hope that brought a smile to your face!
      </div>
    </div>
  );
};

interface WeatherData {
  icon: string;
  desc: string;
  temp: number;
  humidity: number;
  wind: string;
}

export const WeatherCommand: React.FC<{ location?: string }> = ({
  location,
}) => {
  const [weatherData, setWeatherData] = React.useState<WeatherData | null>(
    null
  );
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      // TODO: Replace with real API when key is available
      // const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      // if (!apiKey) {
      //   setError("Weather API key not configured. Using mock data.");
      //   setLoading(false);
      //   return;
      // }
      // const query = location || "San Francisco, CA";
      // const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&appid=${apiKey}&units=imperial`;
      // try {
      //   const response = await fetch(url);
      //   if (!response.ok) throw new Error(`HTTP ${response.status}`);
      //   const data = await response.json();
      //   setWeatherData({
      //     icon: getWeatherIcon(data.weather[0].main),
      //     desc: data.weather[0].description,
      //     temp: Math.round(data.main.temp),
      //     humidity: data.main.humidity,
      //     wind: `${Math.round(data.wind.speed)} mph ${getWindDirection(data.wind.deg)}`
      //   });
      // } catch (err) {
      //   setError(err instanceof Error ? err.message : "Failed to fetch weather");
      // } finally {
      //   setLoading(false);
      // }

      // Fallback: Dynamic mock data (randomized)
      const mockConditions: WeatherData[] = [
        {
          icon: "🌤️",
          desc: "Partly Cloudy",
          temp: 72,
          humidity: 65,
          wind: "8 mph NW",
        },
        { icon: "☀️", desc: "Sunny", temp: 85, humidity: 40, wind: "5 mph SW" },
        {
          icon: "🌧️",
          desc: "Rainy",
          temp: 62,
          humidity: 85,
          wind: "12 mph NE",
        },
        { icon: "❄️", desc: "Snowy", temp: 32, humidity: 90, wind: "15 mph N" },
        { icon: "🌫️", desc: "Foggy", temp: 55, humidity: 95, wind: "2 mph SE" },
      ];
      const randomData =
        mockConditions[Math.floor(Math.random() * mockConditions.length)];
      setWeatherData(randomData);
      setLoading(false);
    };

    fetchWeather();
  }, [location]);

  if (loading) {
    return (
      <div className="space-y-2">
        <div className="text-blue-400 font-semibold">
          🌤️ Loading weather for {location || "San Francisco, CA"}...
        </div>
        <div className="text-gray-500 text-sm">
          ⏳ Fetching real-time data...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-2">
        <div className="text-red-400 font-semibold">
          🌤️ Weather: {location || "San Francisco, CA"}
        </div>
        <div className="text-red-400">Error: {error}</div>
        <div className="text-gray-500 text-sm">
          💡 Check location or API key.
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="text-blue-400 font-semibold">
        🌤️ Weather: {location || "San Francisco, CA"}
      </div>
      <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
        <div className="grid grid-cols-2 gap-4 text-gray-300">
          <div>
            <div className="text-2xl">{weatherData!.icon}</div>
            <div className="text-lg font-semibold">{weatherData!.temp}°F</div>
            <div className="text-sm text-gray-400">{weatherData!.desc}</div>
          </div>
          <div className="space-y-1 text-sm">
            <div>Humidity: {weatherData!.humidity}%</div>
            <div>Wind: {weatherData!.wind}</div>
            <div>Visibility: 10 miles</div>
            <div>UV Index: 6</div>
          </div>
        </div>
      </div>
      <div className="text-gray-500 text-sm">
        💡 Perfect weather for coding!
      </div>
    </div>
  );
};

export const QuoteCommand: React.FC = () => {
  const [quote, setQuote] = React.useState({ text: "", author: "" });
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const quotes = [
      {
        text: "The best error message is the one that never shows up.",
        author: "Thomas Fuchs",
      },
      {
        text: "Infrastructure as code is the future of DevOps.",
        author: "Unknown",
      },
      {
        text: "Automate all the things!",
        author: "DevOps Community",
      },
      {
        text: "You can't improve what you don't measure.",
        author: "Lord Kelvin (adapted for DevOps)",
      },
      {
        text: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci",
      },
      {
        text: "Code is like humor. When you have to explain it, it's bad.",
        author: "Cory House",
      },
      {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
      },
      {
        text: "In DevOps, we trust... but we verify.",
        author: "DevOps Engineer",
      },
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="space-y-2">
        <div className="text-green-400 font-semibold">💭 Loading Quote...</div>
        <div className="text-gray-500 text-sm">⏳ Generating wisdom...</div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="text-green-400 font-semibold">💭 Inspirational Quote</div>
      <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
        <blockquote className="text-gray-300 italic text-center">
          {quote.text}
        </blockquote>
        <div className="text-gray-400 text-sm text-right mt-2">
          - {quote.author}
        </div>
      </div>
      <div className="text-gray-500 text-sm">💡 Words to live by in DevOps</div>
    </div>
  );
};

export const AsciiArtCommand: React.FC = () => (
  <div className="space-y-2">
    <div className="text-pink-400 font-semibold">🎨 ASCII Art</div>
    <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
      <pre className="text-green-400 font-mono text-xs">
        {`     _______
    /       \\
   |  DevOps  |
    \\_______/
       | |
       | |
      /   \\
     |     |
      \\___/`}
      </pre>
    </div>
    <div className="text-gray-500 text-sm">
      💡 ASCII art generated on the fly
    </div>
  </div>
);

export const MatrixCommand: React.FC = () => (
  <div className="space-y-2">
    <div className="text-green-400 font-semibold">🖥️ Matrix Mode</div>
    <div className="bg-black p-3 rounded-lg border border-green-500">
      <div className="font-mono text-xs text-green-400 space-y-1">
        <div>
          01010100 01101000 01100101 00100000 01001101 01100001 01110100
          01110010 01101001 01111000
        </div>
        <div>
          01101000 01100001 01110011 00100000 01111001 01101111 01110101
          00101110 00101110 00101110
        </div>
        <div>
          01010111 01100101 01101100 01100011 01101111 01101101 01100101
          00100000 01110100 01101111
        </div>
        <div>
          01110100 01101000 01100101 00100000 01110010 01100101 01100001
          01101100 00100000 01110111 01101111 01110010 01101100 01100100
        </div>
      </div>
    </div>
    <div className="text-gray-500 text-sm">
      💡 Wake up, Neo... The Matrix has you
    </div>
  </div>
);
