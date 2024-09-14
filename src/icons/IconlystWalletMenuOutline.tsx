import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletMenuOutline = ({
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
      d="M17.442 10.094a1.781 1.781 0 1 0 0 3.562h3.807a.75.75 0 0 1 0 1.5h-3.807a3.282 3.282 0 0 1 0-6.562h3.807a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.494 11.82a.75.75 0 0 1 .75-.75h.003a.75.75 0 0 1 0 1.5h-.003a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.186 4.438A4.185 4.185 0 0 0 4 8.622V9.73a.75.75 0 1 1-1.5 0V8.622a5.685 5.685 0 0 1 5.686-5.684h8.128A5.685 5.685 0 0 1 22 8.622v6.75a5.685 5.685 0 0 1-5.686 5.686h-2.486a.75.75 0 1 1 0-1.5h2.486a4.185 4.185 0 0 0 4.186-4.185v-6.75a4.185 4.185 0 0 0-4.186-4.185z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.226 13.1c.493-.528 1.186-.81 1.97-.81h3.433c.785 0 1.478.281 1.971.811.488.524.725 1.23.725 1.983v3.18c0 .755-.237 1.46-.725 1.984-.493.53-1.186.812-1.971.812H5.196c-.785 0-1.478-.282-1.972-.812-.488-.524-.724-1.229-.724-1.983v-3.18c0-.756.238-1.461.726-1.984m1.097 1.024c-.186.2-.323.517-.323.96v3.18c0 .445.137.763.322.962.18.193.46.334.874.334h3.433c.414 0 .694-.141.874-.334.185-.2.322-.517.322-.961v-3.18c0-.445-.137-.763-.322-.962-.18-.193-.46-.334-.874-.334H5.196c-.412 0-.692.14-.873.335"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.912 12.29a.75.75 0 0 1 .75.75v7.27a.75.75 0 0 1-1.5 0v-7.27a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 16.676a.75.75 0 0 1 .75-.75h7.325a.75.75 0 1 1 0 1.5H3.25a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletMenuOutline;
