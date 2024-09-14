import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNemBold = ({
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
      d="M16.34 16.499c-.24-1.573-1.668-3.12-4.116-4.5a.3.3 0 0 0-.309.008c-1.027.65-3.324 1.913-5.631 1.913q-.727.001-1.413-.185c-.27-.075-.536.207-.405.455 1.664 3.136 3.983 5.214 5.574 6.372.585.428 1.28.642 1.97.642a3.22 3.22 0 0 0 1.932-.634 19 19 0 0 0 1.804-1.532.3.3 0 0 0 .048-.06c.349-.588.702-1.461.547-2.479M2.94 10.183a.3.3 0 0 0 .022.062c.496.987 1.164 1.648 2.001 1.956 2.189.806 5.056-.774 6.162-1.47a.3.3 0 0 0 .136-.258c-.06-3.236.556-5.625 1.831-7.125.173-.202.05-.537-.215-.544-3.48-.095-6.467.817-8.308 1.573-1.357.559-2.2 1.947-2.052 3.374.09.853.234 1.664.422 2.432M19.468 4.282a17 17 0 0 0-3.242-1.07.3.3 0 0 0-.111-.002 3.1 3.1 0 0 0-1.541.758c-1.24 1.117-1.856 3.346-1.806 6.448a.3.3 0 0 0 .155.257c2.03 1.136 4.232 2.804 4.796 5.147.065.271.439.37.594.137 2.024-3.033 2.83-6.123 3.146-8.089.238-1.493-.581-2.968-1.991-3.586"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNemBold;
