import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlateOutline = ({
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
      d="M2.412 8.072a1.538 1.538 0 0 1 .211-.292c.199-.22.457-.4.727-.55.542-.29 1.275-.53 2.119-.73 1.697-.38 4.006-.62 6.53-.62s4.834.24 6.532.62c.844.2 1.577.44 2.119.73.27.15.528.33.727.55a1.5 1.5 0 0 1 .222.313 1.27 1.27 0 0 1 .14.765v.016c.011.147.011.284.011.396 0 2.508-1.65 4.612-4.007 5.889.007.098.01.213.007.321a2 2 0 0 1-.017.192 1.2 1.2 0 0 1-.09.308c-.005.01-.01.02-.015.02a1.84 1.84 0 0 1-.262.43c-.196.23-.477.44-.883.61-.783.34-2.117.58-4.49.58-2.366 0-3.698-.24-4.48-.58a3 3 0 0 1-.467-.247 2 2 0 0 1-.414-.363 1.8 1.8 0 0 1-.265-.436l-.003-.004c-.1-.2-.112-.41-.116-.51a3 3 0 0 1 .007-.35C3.91 13.856 2.25 11.769 2.25 9.27v-.01c0-.11 0-.242.012-.392v-.004a1.26 1.26 0 0 1 .15-.792m17.674 2.343c-.449.18-.976.335-1.555.465-1.698.39-4.007.62-6.531.62s-4.833-.23-6.532-.62a10 10 0 0 1-1.55-.463c.428 1.443 1.656 2.737 3.474 3.603a.76.76 0 0 1 .402.873l-.002.007v.01l-.007.039-.006.041a3 3 0 0 0-.032.413c.013.03.013.034.015.038l.016.019c.015.02.09.1.325.2.497.21 1.582.46 3.89.46 2.316 0 3.404-.25 3.903-.46.236-.1.31-.18.326-.2l.015-.019c.002-.004.002-.008.015-.036q0-.031-.002-.076l-.006-.099a3 3 0 0 0-.026-.21l-.004-.022-.007-.048a.75.75 0 0 1 .396-.89c1.83-.868 3.059-2.181 3.483-3.645m.074-1.724a2 2 0 0 0-.224-.141c-.37-.2-.954-.4-1.74-.58-1.559-.36-3.75-.59-6.197-.59-2.445 0-4.637.23-6.196.59-.785.18-1.37.38-1.739.58a2 2 0 0 0-.224.14q.078.06.224.14c.37.2.954.41 1.74.59 1.558.36 3.75.58 6.195.58 2.447 0 4.638-.22 6.197-.58.786-.18 1.37-.39 1.74-.59q.145-.08.224-.139"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlateOutline;
