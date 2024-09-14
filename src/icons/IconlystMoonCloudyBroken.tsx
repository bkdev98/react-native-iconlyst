import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonCloudyBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.28 19.39a7.985 7.985 0 0 0 7.97-7.336c-2.42.546-5.238-.507-6.865-2.135-1.626-1.626-2.243-4.235-1.747-6.47a7.98 7.98 0 0 0-5.432 2.792M5.911 14.553c-.726-1.893-.76-3.748-.283-5.385"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.604 20.551c-.262 0-.608-.054-.955-.194a2.38 2.38 0 0 1-1.399-2.168c0-1.49 1.053-2.365 2.356-2.376 0-.938.735-2.813 2.812-2.813s2.811 1.875 2.811 2.813c1.304.011 2.356.887 2.356 2.376 0 .965-.572 1.797-1.397 2.17a2.7 2.7 0 0 1-.96.192H8.414"
    />
  </Svg>
);
export default IconlystMoonCloudyBroken;
