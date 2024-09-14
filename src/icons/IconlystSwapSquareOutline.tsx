import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapSquareOutline = ({
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
      fillRule="evenodd"
      d="M4.846 19.074c.676.723 1.667 1.171 2.938 1.171h8.432c1.284 0 2.274-.455 2.947-1.18.678-.731 1.087-1.795 1.087-3.097V8.023c0-1.315-.415-2.376-1.095-3.101-.676-.72-1.667-1.167-2.94-1.167h-8.43c-1.273 0-2.261.447-2.936 1.167-.68.725-1.094 1.786-1.099 3.102v7.944c0 1.315.415 2.378 1.096 3.106M3.75 20.099c-.982-1.05-1.501-2.5-1.501-4.131V8.02c.005-1.63.524-3.077 1.505-4.124.985-1.052 2.385-1.641 4.03-1.641h8.43c1.645 0 3.047.589 4.034 1.64.982 1.048 1.501 2.496 1.501 4.128v7.945c0 1.615-.51 3.064-1.487 4.118-.983 1.059-2.386 1.66-4.047 1.66H7.784c-1.645 0-3.047-.593-4.033-1.647"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.526 16.062a.75.75 0 0 1 0-1.061l1.663-1.663a.75.75 0 1 1 1.06 1.06l-1.132 1.133 1.133 1.133a.75.75 0 1 1-1.06 1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.307 15.532a.75.75 0 0 1 .75-.75h5.62a1.525 1.525 0 0 0 1.526-1.525v-1.031a.75.75 0 0 1 1.5 0v1.03a3.025 3.025 0 0 1-3.026 3.026h-5.62a.75.75 0 0 1-.75-.75M16.482 7.917a.75.75 0 0 1 0 1.06l-1.663 1.663a.75.75 0 0 1-1.061-1.06l1.133-1.133-1.133-1.133a.75.75 0 1 1 1.06-1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.701 8.448a.75.75 0 0 1-.75.75h-5.62a1.525 1.525 0 0 0-1.526 1.526v1.03a.75.75 0 0 1-1.5 0v-1.03a3.026 3.026 0 0 1 3.025-3.026h5.621a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwapSquareOutline;
