import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldHideBulk = ({
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
      d="M4.661 4.36a.75.75 0 1 0-1.06 1.061l1.271 1.271c-.016.444-.006 1.048.01 1.941.015.963.037 2.262.037 4.037 0 6.417 7.6 8.785 7.677 8.808a.47.47 0 0 0 .29 0c.102-.03 2.34-.727 4.381-2.39l.954.952a.747.747 0 0 0 1.06 0 .75.75 0 0 0 0-1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.097 5.136C19.39 4.431 13.761 2.5 12.74 2.5c-.787 0-3.27.874-3.76 1.05a.5.5 0 0 0-.178.832l10.732 10.551a.5.5 0 0 0 .833-.248 7.8 7.8 0 0 0 .193-1.734c0-1.849.024-3.462.042-4.438.044-2.383.052-2.813-.504-3.377"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystShieldHideBulk;
