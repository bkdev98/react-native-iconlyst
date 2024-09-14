import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPotatoBulk = ({
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
      d="M4.867 10.884A1.607 1.607 0 0 1 6.44 8.939h2.233c.53 0 .999.338 1.166.84l.494 1.481a.23.23 0 0 0 .216.157h3.905a.23.23 0 0 0 .216-.157l.493-1.48c.168-.503.637-.84 1.166-.84h2.233c1.024 0 1.787.943 1.572 1.944l-1.944 9.075a1.95 1.95 0 0 1-1.905 1.54H8.717a1.95 1.95 0 0 1-1.906-1.54zm7.634 3.457a1.952 1.952 0 1 1-.001 3.903 1.952 1.952 0 0 1 0-3.903"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m9.14 2.722 1.31-.21c.58-.09 1.126.3 1.227.88l.786 4.518.39-3.638a1.07 1.07 0 0 1 1.167-.95h.002l1.326.13h.001c.594.05 1.025.59.96 1.18l-.38 3.548.783-2.608c.163-.55.725-.869 1.282-.739l1.289.31c.601.151.952.77.774 1.36l-.79 2.578-.008.018a1.6 1.6 0 0 0-.698-.158h-2.233c-.529 0-.998.338-1.166.84l-.493 1.481a.23.23 0 0 1-.216.156h-3.905a.23.23 0 0 1-.216-.156l-.494-1.48a1.23 1.23 0 0 0-1.166-.84H6.44c-.286 0-.552.073-.782.201l-.007-.026-.704-2.245a1.07 1.07 0 0 1 .764-1.36h.001l1.28-.32a1.07 1.07 0 0 1 1.283.721h.003L9 8.273l-.747-4.312c-.1-.59.297-1.14.888-1.24"
    />
  </Svg>
);
export default IconlystPotatoBulk;
