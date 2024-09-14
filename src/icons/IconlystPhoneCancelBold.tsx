import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCancelBold = ({
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
      d="M20.113 14.846c-.244-.232-.51-.484-.789-.764-1.293-1.295-2.364-.873-3.306-.5-1.075.423-2.092.826-3.947-1.03-1.854-1.854-1.457-2.873-1.035-3.952.37-.945.787-2.017-.503-3.31-.283-.282-.537-.55-.773-.796-.949-1-1.634-1.72-2.598-1.731-.846.023-1.709.52-3.016 1.829-.012.013-.076.076-.087.089-.289.28-1.056 1.024-1.068 2.487-.018 2.29 1.83 5.309 5.49 8.97 3.641 3.643 6.646 5.488 8.933 5.488h.02c1.466-.007 2.22-.775 2.502-1.064l.097-.093c1.304-1.306 1.831-2.18 1.82-3.015-.012-.966-.737-1.655-1.74-2.608M19.778 5.665l2.011-2.01a.749.749 0 1 0-1.06-1.06l-2.013 2.009-2.01-2.01a.75.75 0 0 0-1.062 1.06l2.011 2.01-2.01 2.01a.749.749 0 1 0 1.06 1.06l2.011-2.008 2.012 2.009a.747.747 0 0 0 1.061 0 .75.75 0 0 0 0-1.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneCancelBold;
