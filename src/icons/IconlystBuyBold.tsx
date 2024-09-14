import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuyBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M7.426 18.908c.83 0 1.51.694 1.51 1.551 0 .847-.68 1.541-1.51 1.541-.839 0-1.519-.694-1.519-1.541 0-.857.68-1.551 1.52-1.551m11.242 0c.829 0 1.508.694 1.508 1.551 0 .847-.68 1.541-1.508 1.541-.84 0-1.52-.694-1.52-1.541 0-.857.68-1.551 1.52-1.551M2.778 2l.102.009 2.383.366c.34.062.59.347.62.694l.19 2.286c.03.328.29.572.61.572h13.494c.61 0 1.009.215 1.408.684.4.47.47 1.143.38 1.754l-.95 6.695c-.179 1.287-1.258 2.235-2.527 2.235H7.586c-1.329 0-2.428-1.04-2.538-2.387L4.13 3.783 2.62 3.518a.767.767 0 0 1 .26-1.51ZM16.89 9.702h-2.768a.75.75 0 0 0-.75.766c0 .418.33.765.75.765h2.768c.42 0 .75-.347.75-.765a.75.75 0 0 0-.75-.766"
    />
  </Svg>
);
export default IconlystBuyBold;
