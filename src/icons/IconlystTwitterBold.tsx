import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTwitterBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.335 9.5c-.04-.051-.755-.95-1.723-.662-.837.26-1.138 1.355-1.07 1.895a.75.75 0 0 1-.844.837 8.5 8.5 0 0 1-3.8-1.505c-.117 2.752 1.095 3.829 2.224 4.458a.752.752 0 0 1 .064 1.27c-.396.277-.82.5-1.262.666.584.142 1.213.18 1.756.15 3.212-.204 5.143-2.624 4.92-6.165a.73.73 0 0 1 .117-.45l.427-.38c-.201-.024-.685.05-.81-.114"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.901 9.363-.792 1.237c.158 4.186-2.417 7.258-6.333 7.506q-.22.015-.458.015c-1.41 0-3.196-.403-4.166-1.574a.75.75 0 0 1-.095-.811c.131-.266.407-.451.7-.417a4.2 4.2 0 0 0 1.555-.233c-1.676-1.45-2.247-3.632-1.744-6.632a.75.75 0 0 1 .515-.592.75.75 0 0 1 .76.19 7 7 0 0 0 3.247 1.874c.204-1.081.923-2.164 2.084-2.524 1.473-.44 2.575.384 3.071.874l.974-.065a.75.75 0 0 1 .682 1.152m-1.685-6.354H7.782c-3.16 0-5.282 2.222-5.282 5.53v7.939c0 3.308 2.122 5.53 5.282 5.53h8.433c3.161 0 5.285-2.222 5.285-5.53v-7.94c0-3.307-2.123-5.53-5.284-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTwitterBold;
