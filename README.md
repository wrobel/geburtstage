## JavaScript Tools
### Besserer Code durch eine professionelle Programmierumgebung

Dieses Repository enthält den kompletten Verlauf des Code-Beispiels aus dem
Buch
[JavaScript Tools: Besserer Code durch eine professionelle Programmierumgebung](http://www.amazon.de/JavaScript-Tools-Besserer-professionelle-Programmierumgebung/dp/3955391159/ref=asap_bc?ie=UTF8).

### Aufbau

Dieses Repository enthält im `master`-Branch ausschließlich diese
`README`-Datei. Der eigentliche Code befindet sich in separaten
Branches. Wäre der Code ebenfalls im `master`-Branch müsste ich
zwangsläufig irgendwann die History des Repositories umschreiben. Das
würde zu Konflikten bei den Leuten führen, die das Repository bereits
ausgecheckt haben und das möchte ich vermeiden.

Von daher findet sich die erste Version des Code-Beispiels im Branch
[v1.0](https://github.com/wrobel/geburtstage/tree/v1.0). Sollte es
nachfolgende Versionen geben, finden sich diese in nach den Branches
v1.1, v1.2 usw.

### Aufbau der Branches

Die Sequenz der Commits in einem Branch folgt dem Verlauf der
Beispiele im Buch. Die Commit-Nachricht beginnt dabei mit dem
passenden Kapitel und Abschnitt. Also z.B. markiert `s3.8: Eine
Konfiguration für JSHint` ein Beispiel aus Kapitel 3, Abschnitt 8.

### Nutzung eines Branches

#### Die Vorraussetzungen schaffen

Zuerst einmal gilt es das Repository lokal zu klonen:

```
git clone https://github.com/wrobel/geburtstage.git
cd geburtstage
```

Danach wechselt man auf den Branch `v1.0`:

```
git checkout v1.0
```

Nun befindet man sich auf dem Stand des Code-Beispiels am Ende des
Buches.

Einzige weitere Vorraussetzung ist nun die Installation von
Node.js. Die notwendigen Pakete finden sich unter
[http://nodejs.org/](http://nodejs.org/).

#### Die finale Version des Beispiels testen

Ist Node.js installiert lässt sich die finale Version des Beispiels
sofort testen:

```
npm install
grunt
```

#### Ein Beispiel an einem beliebigen Punkt im Buch durchführen

Alternativ kann man zu einem beliebigen Punkt im Buch springen und die
Beispiele dort ausführen. Einzige Vorraussetzung dafür ist, dass man
die Pakete unter `node_modules` vorher aktualisiert:

```
git checkout 2a6447e9711043
rm -r node_modules
npm install
```

Das obige Beispiel springt in Kapitel 4, Abschnitt 6 zu folgendem Commit:

```
commit 2a6447e97110439ccf616ee0572f8ffdccceb2ac
Author: Gunnar Wrobel <p@rdus.de>
Date:   Wed Jan 28 08:15:58 2015 +0100

    s4.6: Die Grunt Konfiguration für die "watch" Aufgabe

```

Das Löschen von `node_modules` und die erneute Befüllung mit `npm
install` ist nur notwendig, wenn vorher schon ein `npm install` auf
einem weiter hinten liegenden Commit durchgeführt wurde. Ansonsten
kann es passieren, dass ein Beipiel nicht das erwartete Ergebnis
liefert.

#### Die Beispiele aus dem Buch von Anfang an durchgehen

Und natürlich ist es möglich die Beispiele des Buches von Beginn an
Stück für Stück durchzuführen.

Dafür springt man an den Anfang der Commit-Kette im Branch `v1.0`:

```
git checkout v1.0~70
```

Es gibt insgesamt 70 Commits, die zu durchlaufen sind. Sobald man sich
ein Stückchen vorwärts bewegen möchte, dreht man das Repository einen
Schritt weiter:

```
git checkout v1.0~69
```

Bis man irgendwann am Ende des Buches und der Beispiel anlangt:

```
git checkout v1.0~0
```

Sollte man vorher schon etwas mit dem Repository ausprobiert haben und ein `node_modules`-Verzeichnis erzeugt hat, muss dieses vor dem Einstieg in das erste Beispiel entfernt werden:

```
rm -r node_modules
```

### ChangeLog

#### 30.01.2015: v1.0

Die erste Version des Beispiels im Buch eingespielt.
