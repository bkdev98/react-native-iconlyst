import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplay1Bold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M17.009 18.479c0-.122-.03-.24-.07-.35q-.01-.032-.024-.062a1 1 0 0 0-.184-.274q-.024-.023-.05-.044c-.03-.03-.057-.06-.091-.084l-2.958-2.111a1 1 0 0 0-1.581.814v1.11h-1.63a6.456 6.456 0 0 1-6.447-6.45v-.31a1 1 0 1 0-2 0v.31c0 4.66 3.79 8.45 8.448 8.45h1.629v1.112a1 1 0 0 0 1.58.814l2.959-2.111c.034-.024.06-.055.09-.084q.027-.021.05-.044.116-.123.185-.274.014-.03.024-.062a1 1 0 0 0 .07-.35M13.578 5.022H11.95V3.91a1 1 0 0 0-1.58-.814L7.41 5.208c-.034.024-.06.056-.09.085q-.027.02-.05.043a1 1 0 0 0-.185.274q-.012.03-.023.063a1 1 0 0 0-.07.35c0 .122.028.239.07.35q.01.031.023.062.069.15.184.273.024.023.05.045c.03.029.057.06.091.083l2.958 2.112a1 1 0 0 0 1.04.075 1 1 0 0 0 .541-.89v-1.11h1.63a6.456 6.456 0 0 1 6.447 6.45v.31a1 1 0 0 0 2 0v-.31c0-4.66-3.79-8.45-8.448-8.45"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReplay1Bold;
