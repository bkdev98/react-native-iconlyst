import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileCloseBold = ({
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
      d="M14.32 14.455a.75.75 0 1 1-1.061 1.06L12 14.256l-1.259 1.26a.75.75 0 0 1-1.061 0 .75.75 0 0 1 0-1.06l1.26-1.26-1.261-1.261a.749.749 0 1 1 1.061-1.06l1.261 1.26 1.259-1.26a.75.75 0 0 1 1.061 1.06l-1.26 1.26zm2.075-9.091h-2.651a1.66 1.66 0 0 1-1.314-.657l-.856-1.138a2.65 2.65 0 0 0-2.111-1.055H7.588C4.164 2.514 2.5 4.42 2.5 8.342v7.312c0 3.653 2.185 5.833 5.845 5.833h7.296c3.653 0 5.833-2.18 5.833-5.83l.026-4.658c0-3.845-1.622-5.635-5.105-5.635"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileCloseBold;
