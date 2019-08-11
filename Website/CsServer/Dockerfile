FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
COPY ["CsServer/CsServer.csproj", "CsServer/"]
RUN dotnet restore "CsServer/CsServer.csproj"
COPY . .
WORKDIR "/src/CsServer"
RUN dotnet build "CsServer.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "CsServer.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "CsServer.dll"]