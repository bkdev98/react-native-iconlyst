import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGiftGlobeBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 10.604c0-1.607 1.116-2.908 2.491-2.908.593 0 1.074.48 1.074 1.072m-3.566 2.343c-1.969 0-3.565-1.05-3.565-2.343 0-.593.48-1.072 1.072-1.072 1.377 0 2.492 1.301 2.492 2.908M9.448 13.916 12 11.11l2.552 2.805M12 3.365v14.78M19.796 11.161H6.653"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3.365a7.839 7.839 0 0 0-3.645 14.78h7.29a7.84 7.84 0 0 0-.553-14.147M8.374 18.18l-.794 1.237c-.505.79-.758 1.184-.738 1.51a1 1 0 0 0 .408.745c.264.193.732.193 1.67.193H12M15.083 21.865c.937 0 1.406 0 1.67-.193a1 1 0 0 0 .407-.745c.02-.326-.233-.72-.738-1.51l-.797-1.243"
    />
  </Svg>
);
export default IconlystGiftGlobeBroken;
