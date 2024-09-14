import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLensShutterBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M7.712 9.133a.3.3 0 0 0 .462.15l7.336-5.318a.288.288 0 0 0-.057-.503A9.4 9.4 0 0 0 12 2.802a9.43 9.43 0 0 0-5.546 1.806.29.29 0 0 0-.106.329zM13.472 7.295a.3.3 0 0 0 .002.486l3.41 2.46a1 1 0 0 1 .087.074l4.032 2.921a.29.29 0 0 0 .464-.205q.032-.36.033-.727a9.5 9.5 0 0 0-3.968-7.716.29.29 0 0 0-.344.002c-.575.42-2.482 1.809-3.716 2.705M7.755 15.402a.3.3 0 0 0 .285-.392L5.222 6.316a.288.288 0 0 0-.495-.104A9.44 9.44 0 0 0 2.5 12.303c0 1.017.168 1.993.467 2.91.04.122.152.203.28.202.706-.002 3.013-.011 4.508-.013M17.173 12.313a.3.3 0 0 0-.46.151l-2.83 8.695a.288.288 0 0 0 .337.375 9.53 9.53 0 0 0 6.787-6.209.29.29 0 0 0-.108-.331c-.584-.42-2.504-1.797-3.726-2.68M13.563 17.293a.3.3 0 0 0-.286-.392H4.203a.287.287 0 0 0-.25.44c1.701 2.7 4.747 4.458 7.956 4.458.128 0 .24-.083.279-.205.215-.676.92-2.893 1.375-4.3" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.034 8.592a.3.3 0 0 0-.352 0l-3.18 2.306a.3.3 0 0 0-.11.335l1.284 3.961a.3.3 0 0 0 .286.208h3.999a.3.3 0 0 0 .285-.207l1.252-3.847a.3.3 0 0 0-.11-.336z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLensShutterBulk;
