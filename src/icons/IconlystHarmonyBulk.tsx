import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHarmonyBulk = ({
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
      d="M16.717 2.5H8.282C5.123 2.5 3 4.723 3 8.03v7.94c0 3.308 2.123 5.53 5.282 5.53h8.434c3.161 0 5.284-2.222 5.284-5.53V8.03c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.129 14.84V9.16l-.003-.025-.002-.025q0-.023.004-.046l.003-.054c0-1.378-1.144-2.5-2.55-2.5l-.017.003-.015.004-.03-.004-.035-.003a2.65 2.65 0 0 0-2.644 2.65v2.06l-.112.008-.217.014-.171.011-.178.012V9.16a2.65 2.65 0 0 0-2.645-2.65 2.65 2.65 0 0 0-2.644 2.65v5.68l.004.04q.003.018.004.036 0 .015-.004.03l-.004.034c0 1.36 1.146 2.51 2.502 2.51q.014 0 .025-.005.011-.003.023-.004.023 0 .044.004.025.005.05.005a2.65 2.65 0 0 0 2.645-2.65v-2.072l.18-.012.38-.024.118-.008v2.116a2.65 2.65 0 0 0 2.644 2.65 2.65 2.65 0 0 0 2.645-2.65m-7.467-3.399v-2.28c0-.636-.514-1.15-1.145-1.15-.63 0-1.144.514-1.144 1.15v3.2c.671-.459 1.482-.762 2.29-.92M9.518 15.99a1.14 1.14 0 0 1-1.131-1.083c.06-1.208 1.5-1.734 2.275-1.93v1.863c0 .635-.514 1.15-1.144 1.15m6.748-4.105c-.6.312-1.261.521-1.926.653v2.302c0 .634.513 1.15 1.144 1.15.632 0 1.145-.516 1.145-1.15v-3.172q-.172.116-.363.217m.35-2.79c-.042.765-.579 1.219-1.043 1.46a5.7 5.7 0 0 1-1.233.449V9.16c0-.634.513-1.15 1.144-1.15.608 0 1.096.483 1.132 1.085"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHarmonyBulk;
