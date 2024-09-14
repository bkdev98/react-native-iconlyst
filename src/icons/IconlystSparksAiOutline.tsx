import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSparksAiOutline = ({
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
      d="M7.791 10.384a.75.75 0 0 1 .713.52 6.7 6.7 0 0 0 4.31 4.308.75.75 0 0 1 0 1.427 6.7 6.7 0 0 0-4.31 4.31.75.75 0 0 1-1.426 0 6.7 6.7 0 0 0-4.31-4.31.75.75 0 0 1 0-1.427 6.7 6.7 0 0 0 4.31-4.309.75.75 0 0 1 .713-.519m0 2.578a8.2 8.2 0 0 1-2.963 2.963A8.2 8.2 0 0 1 7.79 18.89a8.2 8.2 0 0 1 2.963-2.964 8.2 8.2 0 0 1-2.963-2.963M17.824 7.04a.75.75 0 0 1 .714.519 4.19 4.19 0 0 0 2.693 2.693.75.75 0 0 1 0 1.427 4.19 4.19 0 0 0-2.693 2.694.75.75 0 0 1-1.427 0 4.19 4.19 0 0 0-2.693-2.694.75.75 0 0 1 0-1.427A4.19 4.19 0 0 0 17.11 7.56a.75.75 0 0 1 .713-.52m0 2.435a5.7 5.7 0 0 1-1.49 1.49c.585.4 1.09.906 1.49 1.491.4-.585.906-1.09 1.491-1.49a5.7 5.7 0 0 1-1.49-1.491M11.087 2.533a.75.75 0 0 1 .713.518c.229.704.78 1.256 1.484 1.484a.75.75 0 0 1 0 1.427A2.3 2.3 0 0 0 11.8 7.446a.75.75 0 0 1-1.426 0A2.3 2.3 0 0 0 8.89 5.962a.75.75 0 0 1 0-1.427 2.3 2.3 0 0 0 1.484-1.484.75.75 0 0 1 .713-.518m0 2.264a4 4 0 0 1-.452.452q.245.206.452.451.207-.245.452-.451a4 4 0 0 1-.452-.452"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSparksAiOutline;
