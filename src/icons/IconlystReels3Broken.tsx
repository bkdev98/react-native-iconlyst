import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReels3Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 21h4.347c2.662 0 4.317-1.878 4.317-4.536V7.536C20.914 4.878 19.26 3 16.598 3H7.902C5.249 3 3.586 4.878 3.586 7.536v8.928C3.586 19.122 5.24 21 7.902 21h1.173"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.898 11.588c-.768-.323-1.552.047-1.666.916a16.4 16.4 0 0 0 0 3.519c.105.837.816 1.255 1.666.92a9 9 0 0 0 2.63-1.651c.671-.616.656-1.46 0-2.053M20.802 8.207H3.697M8.399 8.202 7.012 3.077m5.663 5.125-1.449-5.198m5.734 5.198L15.51 3.004"
    />
  </Svg>
);
export default IconlystReels3Broken;
