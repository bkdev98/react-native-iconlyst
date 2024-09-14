import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInfoMenuOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.398 4.502c1.05-.978 2.501-1.486 4.128-1.486h7.948c1.628 0 3.078.51 4.129 1.49 1.056.984 1.647 2.386 1.647 4.042v8.435c0 1.659-.59 3.061-1.648 4.046-1.05.978-2.5 1.487-4.128 1.487H8.526c-1.627 0-3.078-.51-4.128-1.488-1.057-.984-1.648-2.387-1.648-4.046V8.548c0-1.66.59-3.062 1.648-4.046M5.42 5.6c-.72.67-1.17 1.659-1.17 2.948v8.434c0 1.289.45 2.278 1.17 2.949.726.676 1.789 1.085 3.106 1.085h7.948c1.317 0 2.38-.41 3.106-1.085.72-.67 1.17-1.66 1.17-2.948V8.548c0-1.284-.45-2.273-1.17-2.945-.727-.677-1.79-1.087-3.106-1.087H8.526c-1.318 0-2.38.408-3.106 1.084"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.457 15.594a1.01 1.01 0 1 1 0 2.021 1.01 1.01 0 0 1 0-2.021M12.457 11.691a1.01 1.01 0 1 1 0 2.022 1.01 1.01 0 0 1 0-2.022M12.457 7.793a1.01 1.01 0 1 1 0 2.021 1.01 1.01 0 0 1 0-2.021"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInfoMenuOutline;
