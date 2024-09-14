import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaintingPaletteOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M12.512 22.6a9.52 9.52 0 0 1-6.946-3.1 9.7 9.7 0 0 1-2.6-8.026 9.453 9.453 0 0 1 9.826-8.372h.03a9.35 9.35 0 0 1 7.36 3.1c1.839 2.205 2.763 5.788.972 8.372a6.68 6.68 0 0 1-4.9 2.65 1.41 1.41 0 0 0-1.078.51 1.62 1.62 0 0 0 .146 1.379 2.46 2.46 0 0 1-.028 2.315 2.56 2.56 0 0 1-2.106 1.147q-.336.025-.676.025m.282-18a8.015 8.015 0 0 0-8.341 7.087 8.2 8.2 0 0 0 2.21 6.787 7.96 7.96 0 0 0 6.416 2.6 1.14 1.14 0 0 0 .93-.42 1.03 1.03 0 0 0-.052-.934 2.9 2.9 0 0 1-.08-2.734 2.7 2.7 0 0 1 2.214-1.256 5.35 5.35 0 0 0 3.832-2.015c1.35-1.948.548-4.832-.891-6.557a8.06 8.06 0 0 0-6.211-2.563h-.027z"
    />
    <Path
      fill={props.color}
      d="M9.698 9.27A.967.967 0 1 1 9.7 7.336a.967.967 0 0 1-.002 1.934M14.315 8.178a.968.968 0 1 0 0-1.936.968.968 0 0 0 0 1.936M17.837 11.805a.968.968 0 1 0 0-1.936.968.968 0 0 0 0 1.936M7.153 13.374a.968.968 0 1 1-.003-1.936.968.968 0 0 1 .003 1.935"
    />
  </Svg>
);
export default IconlystPaintingPaletteOutline;
