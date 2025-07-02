module.exports = {
    footer: "Developed by AsmiSSA | Prime Music v1.2",
    ping: {
      description: "Sprawdź opóźnienie bota",
      response: "Sprawdzam...",
      embed: {
        title: "Opóźnienie bota",
        responseTime: "- Czas odpowiedzi bota: **{latency}ms**",
        websocketPing: "- Ping WebSocket: **{ping}ms**",
        uptime: "- Czas działania: **{uptime}**",
        footer: "Developed by AsmiSSA | Prime Music v1.2"
      }
    },
    addsong: {
      embed: {
          playlistNotFound: "Nie znaleziono playlisty",
          playlistNotFoundDescription: "- Nie znaleziono playlisty.",
          accessDenied: "Brak dostępu",
          accessDeniedDescription: "- Nie masz uprawnień do dodawania piosenek do tej playlisty.",
          songAdded: "Dodano piosenkę",
          songAddedDescription: "- Piosenka **{songInput}** została dodana do playlisty **{playlistName}**.",
          error: "Błąd",
          errorDescription: "- Wystąpił błąd podczas dodawania piosenki."
      }
  },
  allplaylists: {
    embed: {
        noPlaylistsFound: "Nie znaleziono playlist",
        noPlaylistsFoundDescription: "- Brak dostępnych publicznych playlist.",
        createdBy: "Utworzone przez: {userId}",
        serverName: "Serwer: {serverName}",
        songs: "Piosenek: **{songCount}**",
        publicPlaylistsTitle: "Publiczne playlisty (Strona {currentPage}/{totalPages})",
        error: "Błąd",
        errorDescription: "- Wystąpił błąd podczas pobierania playlist."
    }
  },
  autoplay: {
    embed: {
        autoplayUpdated: "Autoodtwarzanie zaktualizowane",
        autoplayStatus: "- Autoodtwarzanie zostało **{status}** dla tego serwera.",
        enabled: "włączone",
        disabled: "wyłączone",
        error: "Błąd",
        errorDescription: "- Wystąpił błąd podczas aktualizacji autoodtwarzania."
    },
    commandDescription: "Włącz lub wyłącz autoodtwarzanie"
  },
  createplaylist: {
    embed: {
        playlistExists: "Playlista już istnieje",
        playlistExistsDescription: "- Playlista o tej nazwie już istnieje.",
        playlistCreated: "Playlista utworzona",
        playlistCreatedDescription: "- Playlista **{playlistName}** została utworzona.\n- Widoczność: **{visibility}**.",
        private: "Prywatna",
        public: "Publiczna",
        error: "Błąd",
        errorDescription: "- Wystąpił błąd podczas tworzenia playlisty."
    },
    commandDescriptionName: "Podaj nazwę playlisty",
    commandDescriptionPrivate: "Ustaw playlistę jako prywatną (widoczną tylko dla Ciebie)"
  },
  deleteplaylist: {
    embed: {
        playlistNotFound: "Nie znaleziono playlisty",
        playlistNotFoundDescription: "- Nie znaleziono playlisty.",
        accessDenied: "Brak dostępu",
        accessDeniedDescription: "- Nie masz uprawnień do usunięcia tej playlisty.",
        playlistDeleted: "Playlista usunięta",
        playlistDeletedDescription: "- Playlista **{playlistName}** została usunięta.",
        error: "Błąd",
        errorDescription: "- Wystąpił błąd podczas usuwania playlisty."
    },
    commandDescriptionName: "Podaj nazwę playlisty"
  },
  deletesong: {
    embed: {
        playlistNotFound: "Nie znaleziono playlisty",
        playlistNotFoundDescription: "- Nie znaleziono playlisty.",
        songDeleted: "Piosenka usunięta",
        songDeletedDescription: "- Piosenka **{songName}** została usunięta z playlisty **{playlistName}**.",
        error: "Błąd",
        errorDescription: "- Wystąpił błąd podczas usuwania piosenki."
    },
    commandDescriptionPlaylist: "Podaj nazwę playlisty",
    commandDescriptionSong: "Podaj nazwę piosenki"
  },
  filters: {
    embed: {
        error: "Błąd",
        noPlayer: "- Nie znaleziono aktywnego odtwarzacza. Najpierw włącz piosenkę.",
        wrongChannel: "- Musisz być na tym samym kanale głosowym co bot, aby użyć tej komendy.",
        filtersCleared: "Wszystkie filtry zostały wyczyszczone.",
        invalidFilter: "Wybrano nieprawidłowy filtr.",
        filterApplied: "Filtr **{filter}** został zastosowany.",
        errorProcessing: "- Wystąpił błąd podczas przetwarzania Twojego żądania."
    },
    commandDescription: "Wybierz filtr do zastosowania"
  },
  help: {
    embed: {
        title: "📜 Menu pomocy {botName}",
        author: "Pomoc",
        description: `
        **Witaj w {botName}!**

        > Twój najlepszy towarzysz muzyczny na Discordzie.
        > Poniżej znajdują się szczegółowe informacje o bocie:
                
        **📂 Komendy:** {totalCommands}
        **🌐 Serwery:** {totalServers}
        **👥 Użytkownicy:** {totalUsers}
        **⏳ Czas działania:** {uptimeString}
        **📡 Ping:** {ping}ms
        `,
        availableCommands: "Dostępne komendy",
        noDescription: "Brak dostępnego opisu.",
        noCommands: "Nie znaleziono komend.",
        error: "❌ Wystąpił błąd podczas pobierania menu pomocy."
    },
    commandDescription: "Uzyskaj informacje o bocie"
  },
  myplaylists: {
    embed: {
        noPlaylistsFound: "Nie znaleziono playlist",
        noPlaylistsFoundDescription: "- Nie utworzyłeś żadnych playlist.",
        yourPlaylistsTitle: "Twoje playlisty (Strona {currentPage}/{totalPages})",
        visibility: "Widoczność",
        private: "Prywatna",
        public: "Publiczna",
        server: "Serwer",
        songs: "Piosenek",
        error: "Błąd",
        errorDescription: "- Wystąpił błąd podczas pobierania Twoich playlist."
    }
  },
  nowPlaying: {
    embed: {
        error: "Błąd",
        noSong: "- Obecnie nie odtwarzana jest żadna piosenka.",
        nowPlaying: "Teraz odtwarzane!",
        errorDescription: "- Wystąpił błąd podczas przetwarzania Twojego żądania."
    }
  },
  pause: {
    embed: {
        error: "Błąd",
        noActivePlayer: "- Nie znaleziono aktywnego odtwarzacza.",
        paused: "Wstrzymano!",
        pausedDescription: "**- Odtwarzanie zostało wstrzymane!**",
        errorDescription: "- Wystąpił błąd podczas przetwarzania Twojego żądania."
    }
  },
  play: {
    embed: {
        error: "Błąd",
        noVoiceChannel: "- Musisz być na kanale głosowym, aby użyć tej komendy.",
        noLavalinkNodes: "- Brak dostępnych węzłów Lavalink do przetworzenia żądania.",
        noResults: "- Nie znaleziono żadnych wyników.",
        requestUpdated: "Żądanie zaktualizowane!",
        successProcessed: "- Twoje żądanie zostało pomyślnie przetworzone.\n- Użyj przycisków do sterowania odtwarzaniem",
        errorProcessing: "- Wystąpił błąd podczas przetwarzania Twojego żądania."
    },
    commandDescription: "Wprowadź nazwę piosenki / link lub playlistę"
  },
  playCustomPlaylist: {
    embed: {
        error: "Błąd",
        noVoiceChannel: "- Musisz być na kanale głosowym, aby użyć tej komendy.",
        playlistNotFound: "- Nie znaleziono playlisty.",
        accessDenied: "Brak dostępu",
        noPermission: "- Nie masz uprawnień do odtwarzania tej prywatnej playlisty.",
        emptyPlaylist: "- Playlista jest pusta.",
        playingPlaylist: "Odtwarzam playlistę!",
        playlistPlaying: "- Playlista **{playlistName}** jest teraz odtwarzana.\n- Użyj przycisków do sterowania odtwarzaniem",
        errorResolvingSong: "- Błąd rozwiązywania problemu z piosenką.",
        errorPlayingPlaylist: "- Wystąpił błąd podczas odtwarzania playlisty."
    },
    commandDescription: "Podaj nazwę playlisty"
  },
  queue: {
    embed: {
        queueEmpty: "Kolejka jest pusta",
        queueEmptyDescription: "- Kolejka jest obecnie pusta. Dodaj piosenki za pomocą komendy `/play`.",
        currentQueue: "Aktualna kolejka",
        noMoreSongs: "- Brak więcej piosenek w kolejce.",
        error: "Błąd",
        errorDescription: "- Wystąpił błąd podczas pobierania kolejki."
    }
  },
  remove: {
    embed: {
        queueEmpty: "Kolejka jest pusta",
        queueEmptyDescription: "- Kolejka jest obecnie pusta. Dodaj piosenki za pomocą komendy `/play`.",
        invalidPosition: "Błąd",
        invalidPositionDescription: "- Nieprawidłowa pozycja. Podaj liczbę od 1 do {queueLength}.",
        songRemoved: "Piosenka usunięta",
        songRemovedDescription: "- Usunięto piosenkę: **{songTitle}** z kolejki.",
        error: "Błąd",
        errorDescription: "- Wystąpił błąd podczas usuwania piosenki z kolejki."
    }
  },
  resume: {
    embed: {
        noActivePlayer: "Błąd",
        noActivePlayerDescription: "- Nie znaleziono aktywnego odtwarzacza.",
        resumed: "Wznowiono!",
        resumedDescription: "**- Odtwarzanie zostało wznowione!**",
        error: "Błąd",
        errorDescription: "- Wystąpił błąd podczas przetwarzania Twojego żądania."
    }
  },
  showsongs: {
    embed: {
        error: "Błąd",
        playlistNotFound: "- Nie znaleziono playlisty.",
        accessDenied: "Brak dostępu",
        noPermission: "- Nie masz uprawnień do przeglądania tej prywatnej playlisty.",
        noSongs: "- Brak piosenek na tej playliście.",
        songsInPlaylist: "Piosenki na {playlistName}",
        songsInPlaylistPage: "Piosenki na {playlistName} (Strona {currentPage}/{totalPages})",
        errorDescription: "- Wystąpił błąd podczas wyświetlania piosenek."
    }
  },
  shuffle: {
    embed: {
        queueEmpty: "Kolejka jest pusta",
        queueEmptyDescription: "- Kolejka jest obecnie pusta. Dodaj piosenki za pomocą komendy `/play`.",
        queueShuffled: "Kolejka przetasowana",
        queueShuffledDescription: "- Kolejka została pomyślnie przetasowana.",
        error: "Błąd",
        errorDescription: "- Wystąpił błąd podczas tasowania kolejki."
    }
  },
  skip: {
    embed: {
        noActivePlayer: "Błąd",
        noActivePlayerDescription: "- Nie znaleziono aktywnego odtwarzacza.",
        songSkipped: "Piosenka pominięta!",
        songSkippedDescription: "**- Odtwarzacz zagra następną piosenkę!**",
        error: "Błąd",
        errorDescription: "- Wystąpił błąd podczas przetwarzania Twojego żądania."
    }
  },
  stop: {
    embed: {
        noActivePlayer: "Błąd",
        noActivePlayerDescription: "- Nie znaleziono aktywnego odtwarzacza.",
        musicHalted: "Muzyka zatrzymana!",
        musicHaltedDescription: "**- Odtwarzanie zostało zatrzymane, a odtwarzacz zniszczony!**",
        error: "Błąd",
        errorDescription: "- Wystąpił błąd podczas przetwarzania Twojego żądania."
    }
  },
  support: {
    embed: {
        authorName: "Serwer wsparcia",
        description: "➡️ **Dołącz do naszego serwera Discord, aby uzyskać wsparcie i aktualizacje:**\n- Discord - {supportServerLink}\n\n➡️ **Obserwuj nas na:**\n- GitHub - {githubLink}\n- Replit - {replitLink}\n- YouTube - {youtubeLink}",
        error: "Błąd",
        errorDescription: "- Wystąpił błąd podczas przetwarzania Twojego żądania."
    }
  },
  volume: {
    embed: {
        noActivePlayer: "Błąd",
        noActivePlayerDescription: "- Nie znaleziono aktywnego odtwarzacza.",
        volumeUpdated: "Głośność zaktualizowana!",
        volumeUpdatedDescription: "- Głośność została ustawiona na **{volume}%**",
        error: "Błąd",
        errorDescription: "Wystąpił błąd podczas ustawiania głośności."
    },
    volumeRangeError: "Poziom głośności musi mieścić się w zakresie od 0 do 100."
  },
    errors: {
      noPermission: "Nie masz uprawnień do użycia tej komendy.",
      generalError: "- Błąd: {error}"
    }
  };
