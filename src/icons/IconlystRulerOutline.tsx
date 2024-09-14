import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRulerOutline = ({
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
      d="M13.15 3.872a3.836 3.836 0 0 1 5.422 0l2.49 2.491a3.833 3.833 0 0 1 0 5.421l-9.341 9.343a3.834 3.834 0 0 1-5.423 0l-2.49-2.49a3.833 3.833 0 0 1 0-5.422zm1.06 1.061-9.34 9.342a2.333 2.333 0 0 0 0 3.3l2.49 2.491c.91.912 2.389.912 3.3 0l9.342-9.342a2.333 2.333 0 0 0 0-3.3l-2.49-2.49"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.589 4.433a.75.75 0 0 1 1.06 0l3.084 3.083a.75.75 0 1 1-1.06 1.06l-3.084-3.083a.75.75 0 0 1 0-1.06M4.368 12.655a.75.75 0 0 1 1.06 0l2.4 2.399a.75.75 0 1 1-1.062 1.06l-2.398-2.398a.75.75 0 0 1 0-1.06M7.146 9.876a.75.75 0 0 1 1.06.011l3.051 3.116a.75.75 0 1 1-1.072 1.05l-3.05-3.116a.75.75 0 0 1 .011-1.06M9.849 7.173a.75.75 0 0 1 1.06 0l1.713 1.712a.75.75 0 0 1-1.061 1.06L9.849 8.234a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRulerOutline;
