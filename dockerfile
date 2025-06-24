# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Kopiere Projektdateien und restore Abhängigkeiten
COPY WebApplication_Landjugend/WebApplication_Landjugend.csproj ./WebApplication_Landjugend/
RUN dotnet restore ./WebApplication_Landjugend/WebApplication_Landjugend.csproj

# Baue das Projekt
COPY . .
WORKDIR /src/WebApplication_Landjugend
RUN dotnet publish -c Release -o /app/publish

# Laufzeit-Stufe
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

ENTRYPOINT ["dotnet", "WebApplication_Landjugend.dll"]
