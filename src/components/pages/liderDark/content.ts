import {
  CheckCircle,
  DollarSign,
  Users,
  Briefcase,
  Book,
  Clock,
  Calendar,
  Gamepad,
  FileText,
  MessageSquare,
  UserPlus,
  Target,
  Rocket,
  Share2,
  Zap,
  Crown,
  Sparkles,
  Gift,
  CheckCircle2,
  FileCheck,
  BookOpen,
  MessageCircle,
  Mic,
  Megaphone,
  Award,
  CalendarCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  DURATION_LABEL,
  INDIVIDUAL_MEETINGS,
  GROUP_MEETINGS,
  DISCOUNT_PERCENT,
  STREAM_BADGE,
  GRADUATES_COUNT,
} from "../../../config/course";

/* Арт для bento-сетки «Кому подходит» (Kling, 3:2 / 21:9 / 16:9 — под пролёты карточек).
   WebP, ширина 1200/900 px — это максимальный рендер карточки при DPR 2.
   Вариант 700w закрывает телефон при DPR 2 (348 CSS × 2 = 696) и десктоп при
   DPR 1: там браузер брал файл на 1200 px под пролёт в 566 — перевес вдвое. */
import imgSystem from "../../../assets/goals/goal-system.webp";
import imgIncome from "../../../assets/goals/goal-income.webp";
import imgTeam from "../../../assets/goals/goal-team.webp";
import imgLeader from "../../../assets/goals/goal-leader.webp";
import imgCourse from "../../../assets/goals/goal-course.webp";
import imgFlow from "../../../assets/goals/goal-flow.webp";
import imgSystemSm from "../../../assets/goals/goal-system-700.webp";
import imgIncomeSm from "../../../assets/goals/goal-income-700.webp";
import imgTeamSm from "../../../assets/goals/goal-team-700.webp";
import imgLeaderSm from "../../../assets/goals/goal-leader-700.webp";
import imgCourseSm from "../../../assets/goals/goal-course-700.webp";
import imgFlowSm from "../../../assets/goals/goal-flow-700.webp";

/* Арт для «Состав программы» — предметная съёмка, 16:9.
   WebP 800×452: медиа-полоса карточки рендерится 373×210 CSS px (DPR 2 → 746×420). */
import imgWeeks from "../../../assets/program/program-weeks.webp";
import imgMeetings from "../../../assets/program/program-meetings.webp";
import imgSpeaking from "../../../assets/program/program-speaking.webp";
import imgGroup from "../../../assets/program/program-group.webp";
import imgHomework from "../../../assets/program/program-homework.webp";
import imgChat from "../../../assets/program/program-chat.webp";
import imgCollab from "../../../assets/program/program-collab.webp";
import imgClients from "../../../assets/program/program-clients.webp";
import imgImmersion from "../../../assets/program/program-immersion.webp";
/* Те же кадры в 320w — под мобильную миниатюру 104 CSS px.
   Полные 800w там были перевесом почти вчетверо. */
import imgWeeksSm from "../../../assets/program/program-weeks-320.webp";
import imgMeetingsSm from "../../../assets/program/program-meetings-320.webp";
import imgSpeakingSm from "../../../assets/program/program-speaking-320.webp";
import imgGroupSm from "../../../assets/program/program-group-320.webp";
import imgHomeworkSm from "../../../assets/program/program-homework-320.webp";
import imgChatSm from "../../../assets/program/program-chat-320.webp";
import imgCollabSm from "../../../assets/program/program-collab-320.webp";
import imgClientsSm from "../../../assets/program/program-clients-320.webp";
import imgImmersionSm from "../../../assets/program/program-immersion-320.webp";

/* Эмблемы модулей — гравюра золотом, 1:1. 320w для десктопа (112 CSS × 2dpr),
   160w для телефона (72 CSS × 2dpr): 320w там перевешивал в 2.2 раза, а это
   семь картинок в самой длинной секции страницы. */
import modSquare from "../../../assets/modules/module-square.webp";
import modColumn from "../../../assets/modules/module-column.webp";
import modCage from "../../../assets/modules/module-cage.webp";
import modScales from "../../../assets/modules/module-scales.webp";
import modSeal from "../../../assets/modules/module-seal.webp";
import modTarget from "../../../assets/modules/module-target.webp";
import modFunnel from "../../../assets/modules/module-funnel.webp";
import modSquareSm from "../../../assets/modules/module-square-160.webp";
import modColumnSm from "../../../assets/modules/module-column-160.webp";
import modCageSm from "../../../assets/modules/module-cage-160.webp";
import modScalesSm from "../../../assets/modules/module-scales-160.webp";
import modSealSm from "../../../assets/modules/module-seal-160.webp";
import modTargetSm from "../../../assets/modules/module-target-160.webp";
import modFunnelSm from "../../../assets/modules/module-funnel-160.webp";

export const heroProof = [
  { icon: CalendarCheck, label: STREAM_BADGE },
  { icon: Users, label: `${GRADUATES_COUNT} выпускников` },
  { icon: Award, label: `${DURATION_LABEL} до результата` },
];

/** `image` необязателен: карточка без арта остаётся чисто типографической. */
type GoalCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  /** Тот же арт в 700w — под телефон при DPR 2 и десктоп при DPR 1. */
  imageSm?: string;
  /**
   * Своя ширина у `image`: часть арта отрисована в 1200px, часть в 900.
   * Держим её в данных, потому что дескриптор в srcSet должен совпадать с
   * файлом — иначе браузер считает доступной ширину, которой нет, и выбирает
   * кандидата, дающего мыло.
   */
  imageW?: number;
  /**
   * object-position для кропа: пролёты bento и пропорции арта не совпадают,
   * поэтому у каждой картинки своя точка привязки.
   */
  imagePosition?: string;
};

export const goalsForYou: GoalCard[] = [
  { title: "Выстроить систему", description: "Хотите выстроить понятную и удобную систему в работе.", icon: CheckCircle, image: imgSystem, imageSm: imgSystemSm, imageW: 1200 },
  // 21:9 арт в пролёте ~3.2:1 — режется по вертикали, привязываем к низу, чтобы сохранить основания колонн
  { title: "Увеличить доход", description: "Увеличить количество клиентов и сделать доход стабильно растущим.", icon: DollarSign, image: imgIncome, imageSm: imgIncomeSm, imageW: 1200, imagePosition: "object-bottom" },
  { title: "Собрать команду", description: "Создать своу команду и научиться делегировать.", icon: Users, image: imgTeam, imageSm: imgTeamSm, imageW: 1200 },
  { title: "Стать руководителем", description: "Научиться легко вести инстаграмм и легко проявляться.", icon: Briefcase, image: imgLeader, imageSm: imgLeaderSm, imageW: 900 },
  { title: "Создать обучение", description: "Создать свои курсы и обучения.", icon: Book, image: imgCourse, imageSm: imgCourseSm, imageW: 900 },
  // У этого арта светлая панель в левом-нижнем углу — сдвигаем кроп вправо, чтобы не портить контраст текста
  { title: "Оптимизировать работу", description: "Меньше работать, но больше зарабатывать.", icon: Clock, image: imgFlow, imageSm: imgFlowSm, imageW: 900, imagePosition: "object-right" },
];

export const issues = [
  { title: "Много обучений без результата", description: "Вы проходите много обучений, но так и не получили желаемый результат." },
  { title: "Нет инструментов", description: "Нет инструментов и знаний, как реализовать желаемое." },
  { title: "Сложно вести Instagram", description: "Проблемы с ведением социальных сетей." },
  { title: "Не выстроен личный бренд", description: "Вы не знаете, как выгодно отличаться от других экспертов." },
  { title: "Отсутствует воронка продаж", description: "Не настроены процессы продаж, не собрана продуктовая линейка." },
  { title: "Не хватает веры в себя", description: "Не хватает веры в себя и в то что все получится." },
];

/** Карточка «Состав программы»: медиа-полоса 16:9 сверху, текст под ней. */
type ProgramFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  /** Тот же кадр в 320w — для мобильной миниатюры через srcSet. */
  imageSm?: string;
};

export const programFeatures: ProgramFeature[] = [
  { icon: Calendar, title: `${DURATION_LABEL} обучения`, description: `Интенсивное погружение в тему на протяжении ${DURATION_LABEL}.`, image: imgWeeks, imageSm: imgWeeksSm },
  { icon: Users, title: `${INDIVIDUAL_MEETINGS} индивидуальных встреч`, description: "Работа с бизнес-психологом для достижения ваших целей.", image: imgMeetings, imageSm: imgMeetingsSm },
  { icon: Mic, title: "Занятие по ораторскому мастерству", description: "Научитесь легко и красиво выступать, и владеть вниманием аудитории", image: imgSpeaking, imageSm: imgSpeakingSm },
  { icon: Gamepad, title: `${GROUP_MEETINGS} групповых встречи`, description: "Работа в группе, новые возможности и сотрудничество.", image: imgGroup, imageSm: imgGroupSm },
  { icon: FileText, title: "Домашние задания", description: "Обратная связь на выполненные задания от экспертов.", image: imgHomework, imageSm: imgHomeworkSm },
  { icon: MessageSquare, title: "Чат поддержки и общения", description: "Постоянная связь и обсуждение с группой участников.", image: imgChat, imageSm: imgChatSm },
  { icon: Briefcase, title: "Коллаборации с участниками и с Дарьей Карпук", description: "", image: imgCollab, imageSm: imgCollabSm },
  { icon: UserPlus, title: "Новые клиенты", description: "Получение клиентов через взаимодействие в группе.", image: imgClients, imageSm: imgClientsSm },
  { icon: Target, title: "Полное погружение", description: "Детальный разбор вашей ситуации и работа до результата.", image: imgImmersion, imageSm: imgImmersionSm },
];

export const outcomes = [
  { title: "Продавать не продавая", description: "Научитесь предлагать свои услуги без давления на клиентов.", icon: Target },
  { title: "Создать и запустить свои проекты", description: "Пошаговое создание и запуск собственных обучающих программ.", icon: Rocket },
  { title: "Проявляться в соц. сетях", description: "Освойте создание контента и продвижение в социальных сетях.", icon: Share2 },
  { title: "Использовать сильные стороны", description: "Научитесь продвигать себя, используя свои уникальные качества.", icon: Zap },
  { title: "Стать экспертом", description: "Постройте личный бренд и станьте авторитетом в своей нише.", icon: Crown },
  { title: "Наполниться энергией", description: "Получите мотивацию и вдохновение для новых достижений.", icon: Sparkles },
];

export const preorderBenefits = [
  { icon: Gift, text: "Бесплатная встреча после анкеты" },
  { icon: CheckCircle2, text: `Скидка ${DISCOUNT_PERCENT}% на участие` },
  { icon: FileCheck, text: "Узнайте, подходит ли вам формат" },
];

/** Модуль: квадратная «метка главы» 1:1 слева от заголовка. */
type CourseModule = {
  title: string;
  description: string;
  result: string;
  image?: string;
  /** Та же эмблема в 160w — для мобильной метки через srcSet. */
  imageSm?: string;
};

export const modules: CourseModule[] = [
  {
    title: "1 модуль",
    description: "Мы начнём с основ: планирование, разработка стратегии и детальная декомпозиция задач.",
    result: "Переход от разрозненных идей к ясному и структурированному плану действий.",
    image: modSquare,
    imageSm: modSquareSm,
  },
  {
    title: "2 модуль",
    description: "Мы поработаем с ключевыми внутренними барьерами, такими как синдром самозванца, неуверенность и страх критики.",
    result: "Укрепление внутренней опоры, уверенность в своих силах и смелость заявлять о себе.",
    image: modColumn,
    imageSm: modColumnSm,
  },
  {
    title: "3 модуль",
    description: "Разберёмся с ограничивающими установками: 'а вдруг не получится', 'не смогу', 'это слишком сложно' и другими.",
    result: "Вы научитесь трансформировать страхи в источник энергии и ресурса для движения вперёд.",
    image: modCage,
    imageSm: modCageSm,
  },
  {
    title: "4 модуль",
    description: "Мы проведём полную трансформацию вашего подхода к деньгам: как устанавливать высокие чеки, брать достойную стоимость за свою работу и уверенно увеличивать доход.",
    result: "Вы освоите основные принципы денежного потока, что поможет значительно повысить ваш доход.",
    image: modScales,
    imageSm: modScalesSm,
  },
  {
    title: "5 модуль",
    description: "Определяем вашу уникальность как личности и эксперта, выявляем сильные стороны и ключевые навыки. Узнаем, что именно вам нужно делать, чтобы достигать максимальных результатов, не копируя чужой опыт.",
    result: "Создание продающего личного бренда, чёткое понимание, какой контент создавать и через какие каналы его продвигать.",
    image: modSeal,
    imageSm: modSealSm,
  },
  {
    title: "6 модуль",
    description: "Прокачиваем ваши навыки с помощью маркетинговых инструментов: упаковка продукта, анализ целевой аудитории, разработка системы продвижения и тактик продаж.",
    result: "Рост числа клиентов и объёма продаж. Выстраиваем систему, которая работает на вас.",
    image: modTarget,
    imageSm: modTargetSm,
  },
  {
    title: "4 дополнительных модуля",
    description: "Определяем вашу экспертную самоидентификацию, изучаем целевую аудиторию, создаём продуктовую линейку и разрабатываем эффективную продающую воронку.",
    result: "Вы привлекаете клиентов, с которыми хотите работать, обеспечиваете стабильные продажи, а ваши процессы становятся автоматизированными и эффективными.",
    image: modFunnel,
    imageSm: modFunnelSm,
  },
];

export const includedGroups = [
  {
    label: "Учёба и материалы",
    items: [
      { text: "Доступ к урокам и домашним заданиям", icon: BookOpen },
      { text: "Доступ к блоку по продажам (анализ аудитории, линейка продуктов, воронка продаж)", icon: BookOpen },
    ],
  },
  {
    label: "Встречи и практика",
    items: [
      { text: `${INDIVIDUAL_MEETINGS} индивидуальных встреч`, icon: Users },
      { text: `${GROUP_MEETINGS} групповых встречи`, icon: Users },
      { text: "Участие в занятии по ораторскому мастерству", icon: Mic },
    ],
  },
  {
    label: "Сообщество и бонусы",
    items: [
      { text: "Доступ к общему чату", icon: MessageCircle },
      { text: "Реклама в блоге Дарьи Карпук и выступление в вашем проекте", icon: Megaphone },
      { text: "Чат выпускников", icon: MessageCircle },
      { text: "Сертификат об окончании обучения", icon: Award },
    ],
  },
];

export const navLinks = [
  { href: "#komu", label: "Кому подходит" },
  { href: "#programma", label: "Программа" },
  { href: "#moduli", label: "Модули" },
  { href: "#tarif", label: "Тариф" },
];
