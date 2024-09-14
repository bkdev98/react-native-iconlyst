import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordCloseOutline = ({
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
      d="M3.96 4.34c.966-1.036 2.34-1.615 3.962-1.615h8.24c1.625 0 3 .579 3.965 1.615.96 1.03 1.458 2.452 1.458 4.046v2.187a.75.75 0 0 1-1.5 0V8.386c0-1.284-.398-2.318-1.056-3.024-.651-.7-1.612-1.137-2.867-1.137h-8.24c-1.25 0-2.212.437-2.864 1.138C4.4 6.069 4 7.103 4 8.386v3.962c0 1.283.398 2.317 1.055 3.022.65.7 1.612 1.138 2.867 1.138h2.027a.75.75 0 1 1 0 1.5H7.922c-1.626 0-3-.58-3.965-1.616-.96-1.03-1.457-2.451-1.457-4.044V8.386C2.5 6.79 3 5.37 3.96 4.34"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.842 17.262a4.58 4.58 0 1 1 9.16 0 4.58 4.58 0 0 1-9.16 0m4.58-3.08a3.08 3.08 0 1 0 0 6.16 3.08 3.08 0 0 0 0-6.16"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.81 15.647a.75.75 0 0 1 1.06 0l.55.55.55-.549a.75.75 0 1 1 1.06 1.061l-.549.55.55.548a.75.75 0 0 1-1.061 1.061l-.55-.55-.55.551a.75.75 0 0 1-1.06-1.06l.55-.55-.55-.55a.75.75 0 0 1 0-1.062M11.033 10.306a1.011 1.011 0 1 1 2.023 0 1.011 1.011 0 0 1-2.023 0M14.938 10.306a1.011 1.011 0 1 1 2.022 0 1.011 1.011 0 0 1-2.023 0M7.127 10.306a1.011 1.011 0 1 1 2.022 0 1.011 1.011 0 0 1-2.022 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordCloseOutline;
