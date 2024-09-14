import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNemBulk = ({
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
      d="M16.841 16.499c-.24-1.574-1.669-3.12-4.117-4.5a.3.3 0 0 0-.309.008c-1.027.649-3.324 1.912-5.631 1.912q-.727.001-1.413-.185c-.27-.074-.536.208-.405.455 1.664 3.136 3.984 5.214 5.574 6.372.585.428 1.28.642 1.97.642a3.22 3.22 0 0 0 1.932-.633 19 19 0 0 0 1.804-1.532.3.3 0 0 0 .048-.06c.349-.589.702-1.462.547-2.48"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.44 10.183a.3.3 0 0 0 .022.062c.496.987 1.164 1.648 2.001 1.956 2.189.806 5.056-.774 6.162-1.47a.3.3 0 0 0 .136-.258c-.06-3.236.556-5.625 1.831-7.125.173-.202.05-.537-.215-.544-3.48-.095-6.467.817-8.308 1.573-1.357.559-2.2 1.947-2.052 3.374.09.853.234 1.664.422 2.432M19.968 4.282a17 17 0 0 0-3.241-1.07.3.3 0 0 0-.112-.003 3.1 3.1 0 0 0-1.541.759c-1.24 1.116-1.855 3.346-1.806 6.448a.3.3 0 0 0 .155.256c2.03 1.137 4.232 2.804 4.796 5.147.065.272.44.37.594.137 2.024-3.032 2.83-6.123 3.146-8.088.238-1.493-.581-2.968-1.991-3.586"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystNemBulk;
