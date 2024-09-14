import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPencilBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.603 8.683 19.087 7.57a1.893 1.893 0 0 0-2.645.405l-1.04 1.416a.3.3 0 0 0 .064.419l4.08 2.999a.3.3 0 0 0 .42-.064l1.04-1.416a1.893 1.893 0 0 0-.403-2.645M9.715 17.13a1.32 1.32 0 0 0-.213 1.12l.492 1.875a1.324 1.324 0 0 0 1.342.985l1.937-.089a1.33 1.33 0 0 0 1.006-.539l4.443-6.046a.3.3 0 0 0-.064-.42l-4.08-2.998a.3.3 0 0 0-.42.064zM7.298 12.29c.583-.29 1.186-.59 1.749-.98 1.872-1.296 2.652-3.112 2.089-4.859-.475-1.469-1.817-2.443-3.505-2.542a.743.743 0 0 0-.793.705.75.75 0 0 0 .705.792c1.056.062 1.886.639 2.165 1.506.504 1.561-.891 2.733-1.514 3.165-.475.328-1.004.591-1.565.87-1 .498-2.034 1.013-2.842 1.951-1.188 1.376-1.49 3.315-.786 5.059.707 1.754 2.276 2.948 4.096 3.116a.75.75 0 0 0 .139-1.493c-1.258-.117-2.347-.953-2.843-2.184-.5-1.239-.302-2.555.53-3.519.61-.709 1.468-1.135 2.375-1.587"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPencilBold;
