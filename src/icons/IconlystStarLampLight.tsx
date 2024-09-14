import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarLampLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.66 7.29 13 3.973a1.125 1.125 0 0 0-1.998 0L9.34 7.291c-.165.327-.48.552-.843.603l-3.713.534a1.1 1.1 0 0 0-.62 1.881l2.69 2.581c.262.252.383.617.32.976L6.54 17.51a1.115 1.115 0 0 0 1.622 1.162l2.87-1.426-.91 4.004a.5.5 0 0 0 .487.615h2.784a.5.5 0 0 0 .486-.615l-.901-4.009 2.863 1.43a1.115 1.115 0 0 0 1.623-1.162l-.635-3.643c-.064-.36.057-.725.321-.977l2.686-2.58a1.1 1.1 0 0 0-.62-1.881l-3.713-.535a1.12 1.12 0 0 1-.841-.603"
    />
  </Svg>
);
export default IconlystStarLampLight;
