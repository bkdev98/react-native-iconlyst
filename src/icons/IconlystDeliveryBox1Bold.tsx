import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBox1Bold = ({
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
      d="M12.695 11.277a.3.3 0 0 0 .3 0l2.502-1.448a.3.3 0 0 0 .005-.517l-7.19-4.357a.3.3 0 0 0-.304-.004L5.7 6.28q-.218.129-.405.295c-.144.126-.11.354.057.45zM17.263 8.625a.3.3 0 0 0 .306.003l2.774-1.607c.166-.096.201-.323.056-.45a2.7 2.7 0 0 0-.404-.292l-5.677-3.27a2.91 2.91 0 0 0-2.936 0l-1.297.746a.3.3 0 0 0-.006.517zM18.317 9.928a.3.3 0 0 0-.15.26v2.391a.75.75 0 0 1-1.5 0v-1.174a.3.3 0 0 0-.45-.26l-2.465 1.427a.3.3 0 0 0-.15.26v8.27c0 .197.188.34.37.264q.177-.074.344-.17l5.682-3.273a2.96 2.96 0 0 0 1.464-2.542V8.822q0-.134-.017-.266c-.023-.2-.248-.295-.422-.195zM12.102 12.84a.3.3 0 0 0-.15-.26L4.677 8.367c-.175-.101-.4-.005-.423.195q-.016.128-.016.26v6.56a2.96 2.96 0 0 0 1.467 2.543l5.676 3.269q.173.099.353.174c.182.075.37-.069.37-.266z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBox1Bold;
