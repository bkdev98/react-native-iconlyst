import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscordCircleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M10.49 12.893c-.49 0-.89-.4-.89-.89s.4-.89.89-.89.89.4.89.89-.4.89-.89.89M13.51 12.893c-.49 0-.89-.4-.89-.89s.4-.89.89-.89.89.4.89.89-.4.89-.89.89"
    />
    <Path
      fill={props.color}
      d="M8.87 16.65c-.21 0-.44-.04-.68-.15l-.11-.049s-.09-.04-.1-.05c-.56-.22-1.69-.66-1.8-1.78-.21-2.09.25-4.16 1.32-5.97.19-.32.48-.57.82-.71.67-.27 1.34-.46 2.01-.58.26-.04.52.05.69.25l.25.28h1.44l.25-.28c.17-.2.43-.29.69-.25.67.12 1.34.31 2 .57.35.14.64.39.83.71a9.76 9.76 0 0 1 1.32 5.97c-.11 1.12-1.24 1.57-1.85 1.8l-.09.04c-1.25.53-1.98-.34-2.37-1.03-1 .16-2.02.16-3.01 0-.3.55-.82 1.21-1.62 1.21zm1.31-7.72c-.43.1-.87.24-1.3.41-.04.01-.07.05-.09.08a8.3 8.3 0 0 0-1.12 5.06c.02.21.69.47.91.56 0 0 .09.04.1.04.06.02.11.05.17.08.13-.04.31-.33.54-.86.14-.33.5-.51.85-.43 1.16.26 2.38.26 3.54 0 .35-.07.7.1.85.43.23.53.41.82.52.85.07-.02.13-.04.19-.07 0 0 .09-.04.1-.04.22-.09.88-.35.91-.56a8.2 8.2 0 0 0-1.12-5.05.22.22 0 0 0-.1-.09 8 8 0 0 0-1.29-.399l-.19.21a.76.76 0 0 1-.56.26h-2.12c-.22 0-.42-.09-.56-.26l-.19-.21z"
    />
    <Path
      fill={props.color}
      d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
  </Svg>
);
export default IconlystDiscordCircleOutline;
