import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerChargeBold = ({
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
      d="M16.22 7.818h-4.5a.749.749 0 1 1 0-1.5h4.5c.41 0 .75.34.75.75s-.34.75-.75.75m-8.7 0h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75m8-5.65h-7.9c-3.24 0-5.5 2.18-5.5 5.3v3.15a.3.3 0 0 0 .3.3h10.372a.3.3 0 0 0 .162-.047A7.14 7.14 0 0 1 16.4 9.818h.1c1.337 0 2.58.381 3.624 1.05q.076.049.166.05h.53a.3.3 0 0 0 .3-.3v-3.15c0-3.17-2.25-5.3-5.6-5.3M7.52 17.018h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75m2.18-.4c0-1.365.413-2.634 1.118-3.694.14-.21-.004-.506-.257-.506H2.12v3.45c0 3.17 2.21 5.3 5.5 5.3h3.152c.26 0 .403-.314.248-.524a6.75 6.75 0 0 1-1.32-4.026M16.83 20.333a3.51 3.51 0 0 1-3.55-3.55c0-1.907 1.573-3.467 3.55-3.55a3.51 3.51 0 0 1 3.55 3.55 3.51 3.51 0 0 1-3.55 3.55m-.03-8.6c-2.815.118-5.02 2.336-5.02 5.05 0 2.832 2.218 5.05 5.05 5.05s5.05-2.218 5.05-5.05c0-2.83-2.217-5.05-5.08-5.05"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.93 16.133h-1.055l.317-.6a.751.751 0 0 0-1.326-.702l-.899 1.7a.747.747 0 0 0 .662 1.102h1.088l-.258.515a.75.75 0 0 0 1.342.67l.8-1.6a.75.75 0 0 0-.034-.73.75.75 0 0 0-.637-.355"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerChargeBold;
