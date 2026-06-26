// Open-Meteo uses WMO Weather interpretation codes.
// Reference: https://open-meteo.com/en/docs (see "WMO Weather interpretation codes")
export function getWeatherInfo(code) {
    const map = {
        0:  { text: 'Clear Sky',         icon: 'fa-sun' },
        1:  { text: 'Mainly Clear',      icon: 'fa-sun' },
        2:  { text: 'Partly Cloudy',     icon: 'fa-cloud-sun' },
        3:  { text: 'Overcast',          icon: 'fa-cloud' },
        45: { text: 'Fog',               icon: 'fa-smog' },
        48: { text: 'Rime Fog',          icon: 'fa-smog' },
        51: { text: 'Light Drizzle',     icon: 'fa-cloud-rain' },
        53: { text: 'Drizzle',           icon: 'fa-cloud-rain' },
        55: { text: 'Dense Drizzle',     icon: 'fa-cloud-rain' },
        56: { text: 'Light Freezing Drizzle', icon: 'fa-cloud-rain' },
        57: { text: 'Freezing Drizzle',  icon: 'fa-cloud-rain' },
        61: { text: 'Light Rain',        icon: 'fa-cloud-rain' },
        63: { text: 'Rain',              icon: 'fa-cloud-rain' },
        65: { text: 'Heavy Rain',        icon: 'fa-cloud-showers-heavy' },
        66: { text: 'Light Freezing Rain', icon: 'fa-cloud-rain' },
        67: { text: 'Freezing Rain',     icon: 'fa-cloud-showers-heavy' },
        71: { text: 'Light Snow',        icon: 'fa-snowflake' },
        73: { text: 'Snow',              icon: 'fa-snowflake' },
        75: { text: 'Heavy Snow',        icon: 'fa-snowflake' },
        77: { text: 'Snow Grains',       icon: 'fa-snowflake' },
        80: { text: 'Light Rain Showers', icon: 'fa-cloud-rain' },
        81: { text: 'Rain Showers',      icon: 'fa-cloud-showers-heavy' },
        82: { text: 'Violent Rain Showers', icon: 'fa-cloud-showers-heavy' },
        85: { text: 'Light Snow Showers', icon: 'fa-snowflake' },
        86: { text: 'Heavy Snow Showers', icon: 'fa-snowflake' },
        95: { text: 'Thunderstorm',      icon: 'fa-bolt' },
        96: { text: 'Thunderstorm w/ Hail', icon: 'fa-bolt' },
        99: { text: 'Severe Thunderstorm w/ Hail', icon: 'fa-bolt' },
    }

    return map[code] || { text: 'Unknown', icon: 'fa-question' }
}

// Returns the right icon for a given weather code, accounting for day/night.
// isDay: 1 (or true) = daytime, 0 (or false) = nighttime.
export function getWeatherIcon(code, isDay) {
    // Only clear/partly-cloudy codes have distinct night icons.
    // Everything else (rain, snow, fog, storms) looks the same day or night.
    if (!isDay) {
        if (code === 0) return 'fa-moon'
        if (code === 1) return 'fa-moon'
        if (code === 2) return 'fa-cloud-moon'
        if (code === 3) return 'fa-cloud'
    }
    return getWeatherInfo(code).icon
}