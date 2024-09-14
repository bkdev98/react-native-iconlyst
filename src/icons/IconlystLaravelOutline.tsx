import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLaravelOutline = ({
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
      d="M2.649 4.605a.75.75 0 0 1 1.025-.274l3.014 1.745 3.01-1.743a.75.75 0 1 1 .752 1.298L7.438 7.375V13.7l5.958-3.453a.75.75 0 0 1 .752 0l2.415 1.399v-2.37l-3.012-1.744a.75.75 0 1 1 .751-1.298l3.011 1.742 3.007-1.742a.75.75 0 0 1 .752 1.298l-3.009 1.743v3.672a.75.75 0 0 1-.374.649l-6.709 3.889v3.501a.75.75 0 0 1-1.5 0v-3.5l-3.168-1.835a.75.75 0 0 1-.374-.65V7.376L2.922 5.63a.75.75 0 0 1-.273-1.025m7.581 11.582 5.587-3.239-2.045-1.184-5.588 3.238z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.82 3.786a.27.27 0 0 0-.267 0L4.028 5.248a.27.27 0 0 0-.133.231V16.47c0 .096.05.184.133.232l6.066 3.512a.27.27 0 0 0 .269 0l6.067-3.517a.27.27 0 0 0 .133-.231v-2.931c0-.63.336-1.213.881-1.53l2.528-1.464a.27.27 0 0 0 .133-.231V7.379a.27.27 0 0 0-.133-.232l-2.524-1.46a.27.27 0 0 0-.268 0L14.655 7.15a.27.27 0 0 0-.133.231v3.517a.75.75 0 0 1-1.5 0V7.381c0-.63.335-1.213.88-1.529l2.526-1.464a1.77 1.77 0 0 1 1.772 0l2.523 1.461c.546.316.882.899.882 1.53v2.93c0 .631-.336 1.214-.881 1.53l-2.528 1.464a.27.27 0 0 0-.133.232v2.93c0 .631-.336 1.214-.881 1.53l-6.067 3.517a1.77 1.77 0 0 1-1.772 0L3.276 18a1.77 1.77 0 0 1-.881-1.53V5.48c0-.631.336-1.214.881-1.53l2.525-1.462a1.77 1.77 0 0 1 1.771 0l2.526 1.461c.546.316.882.9.882 1.53v7.472a.75.75 0 1 1-1.5 0V5.478a.27.27 0 0 0-.134-.231z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLaravelOutline;
