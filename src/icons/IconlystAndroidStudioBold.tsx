import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAndroidStudioBold = ({
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
      d="m11.997 5.355.002.001.003-.001a2.085 2.085 0 0 1 2.08 2.083A2.085 2.085 0 0 1 12 9.52c-.27 0-.527-.056-.764-.15l-.005-.004q-.008 0-.014-.002a2.08 2.08 0 0 1-1.3-1.926c0-1.148.934-2.081 2.08-2.083m8.907 6.469a1 1 0 0 0-1.378.317A8.83 8.83 0 0 1 12 16.313a9 9 0 0 1-2.277-.295l1.765-4.55c.168.022.337.052.511.052.198 0 .387-.031.579-.059l.952 2.456a1 1 0 0 0 1.293.572c.515-.2.77-.78.572-1.294l-.967-2.494a4.07 4.07 0 0 0 1.654-3.263c0-1.905-1.315-3.496-3.083-3.945V3a1 1 0 1 0-2 0v.493c-1.765.449-3.082 2.04-3.082 3.945 0 1.362.678 2.563 1.706 3.305l-1.761 4.542a8.85 8.85 0 0 1-3.387-3.144 1 1 0 1 0-1.695 1.061 10.83 10.83 0 0 0 4.358 3.951l-1.352 3.484a1 1 0 0 0 1.866.723L9 17.883c.962.274 1.966.43 3 .43 1.055 0 2.08-.165 3.059-.45l1.356 3.498a1.001 1.001 0 0 0 1.866-.723l-1.362-3.512a10.85 10.85 0 0 0 4.302-3.924 1 1 0 0 0-.317-1.378"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAndroidStudioBold;
