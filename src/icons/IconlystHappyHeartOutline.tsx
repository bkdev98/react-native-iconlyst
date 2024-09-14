import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHappyHeartOutline = ({
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
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5A8.25 8.25 0 0 0 20.5 12a.75.75 0 0 1 1.5 0c0 5.385-4.365 9.75-9.75 9.75S2.5 17.385 2.5 12a9.75 9.75 0 0 1 9.75-9.75.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.32 9.25a.75.75 0 0 1 .75.75v.505a.75.75 0 1 1-1.5 0V10a.75.75 0 0 1 .75-.75m6.46 0a.75.75 0 0 1 .75.75v.505a.75.75 0 0 1-1.5 0V10a.75.75 0 0 1 .75-.75M8.913 13.694a.75.75 0 0 1 1.052.138c.576.75 1.399 1.189 2.285 1.189s1.71-.439 2.285-1.189a.75.75 0 0 1 1.19.914c-.825 1.075-2.069 1.775-3.475 1.775s-2.65-.7-3.475-1.775a.75.75 0 0 1 .138-1.052M19.348 2.624a2.33 2.33 0 0 1 1.66-.091c1.433.461 1.828 1.978 1.459 3.13-.297.922-1.042 1.657-1.613 2.121a9 9 0 0 1-1.114.766l-.021.012-.007.004h-.002l-.001.001-.36-.658-.36.657h-.002l-.002-.002-.006-.003-.022-.012a6 6 0 0 1-.327-.2 9 9 0 0 1-.79-.571c-.57-.465-1.318-1.2-1.607-2.116-.369-1.155.03-2.669 1.46-3.129l.005-.001a2.34 2.34 0 0 1 1.65.092m.002 5.285-.361.657a.75.75 0 0 0 .72.001zm0-.88c.16-.106.355-.244.558-.41.515-.418.972-.922 1.13-1.413.195-.61-.07-1.11-.488-1.245a.83.83 0 0 0-.75.127.75.75 0 0 1-.897.002.84.84 0 0 0-.752-.128c-.42.137-.684.636-.489 1.244l.001.004c.151.48.604.981 1.124 1.404.205.167.403.307.564.414"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHappyHeartOutline;
