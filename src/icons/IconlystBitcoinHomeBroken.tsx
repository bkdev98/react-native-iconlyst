import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinHomeBroken = ({
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
      d="M17.716 21a3.32 3.32 0 0 0 3.322-3.323v-7.172c0-.892-.401-1.735-1.092-2.299l-5.574-4.54a2.964 2.964 0 0 0-3.743 0l-5.574 4.54a2.97 2.97 0 0 0-1.092 2.299v7.172A3.32 3.32 0 0 0 7.285 21H12.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.767 12.889h-2.109v3.019h2.174a1.51 1.51 0 0 0 1.502-1.658c-.075-.785-.778-1.361-1.567-1.361M12.767 9.87h-2.109v3.018h2.174a1.51 1.51 0 0 0 1.502-1.658c-.075-.785-.778-1.36-1.567-1.36M12.229 16.8v-.89M12.229 9.869v-.89"
    />
  </Svg>
);
export default IconlystBitcoinHomeBroken;
