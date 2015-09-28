angular.module('app').config(['$translateProvider', 'localeFormatProvider', function($translateProvider, localeFormatProvider) {

    // Declare number format settings
  localeFormatProvider.addFormat('es', {
    decimal: ',',
    thousands: '.',
    grouping: [3],
    currency: ['€', ''],
    dateTime: '%A %e %B %Y, %X',
    date: '%d/%m/%Y',
    time: '%H:%M:%S',
    periods: ['AM', 'PM'], // unused
    days: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
    shortDays: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
    months: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
    shortMonths: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic']
  });

  $translateProvider.translations('it', {
    PHRASE_EXPORT_DESC: 'Un export dettagliato in formato JSON della tua configurazione per essere usato in altri siti o tools',
    'A-Rated': 'Classe A',
    about: 'Info su Coriolis',
    action: 'azione',
    added: 'aggiunto',
    Advanced: 'Avanzato',
    agility: 'agilità',
    ammo: 'munizioni',
    PHRASE_CONFIRMATION: 'Sei sicuro ?',
    armour: 'armatura',
    available: 'disponibile',
    bins: 'contenitore',
    build: 'configurazione',
    'build name': 'Nome Configurazione',
    builds: 'configurazioni',
    buy: 'compra',
    cancel: 'cancella',
    cells: 'celle',
    close: 'chiudi',
    compare: 'confronta',
    'compare all': 'confronta tutti',
    comparison: 'comparazione',
    comparisons: 'comparazioni',
    component: 'componente',
    cost: 'costo',
    costs: 'costi',
    cm: 'Contromisure',
    create: 'crea',
    'create new': 'crea nuovo',
    credits: 'crediti',
    damage: 'danno',
    delete: 'elimina',
    'delete all': 'elimina tutto',
    dep: 'dep',
    deployed: 'deployed',
    'detailed export': 'esportazione dettagliata',
    disabled: 'disabilita',
    discount: 'sconto',
    done: 'fatto',
    'edit data': 'modifica i dati',
    efficiency: 'efficenza',
    empty: 'vuoto',
    Enforcer: 'Rinforzatore',
    'enter name': 'Inserisci un nome',
    export: 'esporta',
    fixed: 'fissi',
    fuel: 'carburante',
    'full tank': 'Serbatoio Pieno',
    huge: 'enorme',
    hull: 'corazza',
    import: 'importa',
    'import all': 'importa tutto',
    insurance: 'assicurazione',
    'internal compartments': 'compartimenti interni',
    'jump range': 'distanza di salto',
    jumps: 'salti',
    laden: 'carico',
    language: 'lingua',
    large: 'largo',
    mass: 'massa',
    max: 'massimo',
    'max mass': 'massa massimale',
    medium: 'medio',
    'net cost': 'costo netto',
    PHRASE_NO_BUILDS: 'nessuna configurazione è stata aggiunta per la comparazione!',
    PHRASE_NO_RETROCH: 'Nessun cambiamento di Retrofitting',
    none: 'nessuno',
    'none created': 'nessuno creato',
    optimal: 'ottimale',
    'optimal mass': 'massa ottimale',
    'optimize mass': 'ottimizza la massa',
    overwrite: 'sovrasscrivi',
    PHRASE_IMPORT: 'Incolla un JSON o importalo qua',
    penetration: 'penetrazione',
    power: 'potenza',
    priority: 'priorità',
    proceed: 'procedi',
    range: 'distanza',
    rate: 'rateo',
    recharge: 'ricarica',
    reload: 'ricarica',
    rename: 'rinomina',
    repair: 'ripara',
    reset: 'resetta',
    retracted: 'retratti',
    'retrofit costs': 'costi di retrofit',
    'retrofit from': 'retrofit da',
    save: 'salva',
    sell: 'vendi',
    settings: 'impostazioni',
    shields: 'scudi',
    ship: 'nave',
    ships: 'navi',
    shortened: 'accorciato',
    size: 'grandezza',
    skip: 'salta',
    small: 'piccolo',
    speed: 'velocità',
    Stock: 'appena comprata',
    t: 'thrusters',
    time: 'tempo',
    total: 'totale',
    'total range': 'distanza totale',
    turret: 'torrette',
    type: 'tipo',
    unladen: 'scarico',
    PHRASE_UPDATE_RDY: 'Aggiornamenti disponibili ! Clicca per Aggiornare',
    utility: 'supporti',
    'utility mounts': 'supporti di utilità',
    version: 'versione',
    yes: 'sì',
    PHRASE_BACKUP_DESC: 'Esportazione di tutti i dati su Coriolis per salvarli o trasferirli in un altro Browser/dispositivo'
  });
}]);
