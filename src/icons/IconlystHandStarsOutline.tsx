import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHandStarsOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.121 14.953a.88.88 0 0 0-1.154-.084c-.244.184-.488.385-.75.6l-.194.159c-.33.27-.687.555-1.062.813-.747.513-1.638.968-2.686.994-.292.006-.593-.005-.865-.016l-.26-.01a5.4 5.4 0 0 0-.948.034.75.75 0 1 1-.216-1.485c.424-.062.838-.06 1.21-.048l.313.011c.257.01.49.02.73.014.625-.015 1.227-.287 1.872-.73.32-.221.636-.472.962-.739l.181-.148c.264-.217.539-.442.81-.647.95-.714 2.281-.62 3.12.223.931.934.931 2.448 0 3.381l-.226.228c-1.274 1.283-2.563 2.58-4.489 3.33-2.767 1.076-5.337.568-7.877.066l-.148-.03c-.935-.185-1.803-.198-2.83-.198a.75.75 0 0 1 0-1.5c1.027 0 2.027.01 3.12.227 2.653.524 4.838.952 7.191.037 1.622-.63 2.704-1.718 4.026-3.047l.17-.172h.001a.896.896 0 0 0 0-1.263"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.392 11.971c1.317-.03 2.556.218 3.738.514 1.118.281 1.948 1.23 1.948 2.44 0 1.472-1.201 2.485-2.574 2.485h-1.412a.75.75 0 1 1 0-1.5h1.412c.645 0 1.074-.438 1.074-.985 0-.465-.305-.857-.813-.985-1.144-.286-2.226-.495-3.337-.47-1.482.037-2.55.762-3.906 1.684l-.49.33a.75.75 0 0 1-.835-1.245q.24-.16.483-.329c1.315-.9 2.76-1.89 4.711-1.939zM15.976 3.04a.75.75 0 0 1 .703.49l.14.379-.261.097.261-.097a4.47 4.47 0 0 0 2.64 2.64l.38.14a.75.75 0 0 1 0 1.407l-.38.14a4.47 4.47 0 0 0-2.64 2.64l-.14.38a.75.75 0 0 1-1.407 0l-.14-.38a4.47 4.47 0 0 0-2.64-2.64l-.38-.14a.75.75 0 0 1 0-1.407l.38-.14a4.47 4.47 0 0 0 2.64-2.64l.14-.379a.75.75 0 0 1 .704-.49m0 2.524a6 6 0 0 1-1.83 1.829 6 6 0 0 1 1.83 1.828 6 6 0 0 1 1.828-1.828 6 6 0 0 1-1.828-1.829M8.605 1.591a.75.75 0 0 1 .717.532c.231.758.825 1.352 1.583 1.582a.75.75 0 0 1 0 1.435 2.38 2.38 0 0 0-1.583 1.583.75.75 0 0 1-1.435 0A2.38 2.38 0 0 0 6.305 5.14a.75.75 0 0 1 0-1.435 2.38 2.38 0 0 0 1.582-1.582.75.75 0 0 1 .718-.532m-.526 2.832q.289.237.526.526a4 4 0 0 1 .526-.526 4 4 0 0 1-.526-.526 4 4 0 0 1-.526.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHandStarsOutline;
