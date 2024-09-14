import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoNotTouchOutline = ({
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
      d="M10.932 3.75a.93.93 0 0 0-.93.93V8.5a.75.75 0 0 1-1.5 0V4.68a2.43 2.43 0 0 1 4.86-.037l.057 3.667.209.015c.966.07 2.104.152 3.114.407 1.375.346 2.75 1.063 3.349 2.68.914 2.467.28 5.524-1.05 7.506a.75.75 0 0 1-1.245-.836c1.113-1.658 1.605-4.214.888-6.15-.352-.95-1.155-1.455-2.309-1.746-.87-.22-1.807-.287-2.741-.355q-.517-.036-1.026-.082a.75.75 0 0 1-.678-.735l-.067-4.348a.93.93 0 0 0-.93-.916"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.234 3.546a.75.75 0 0 1 1.06.028l15.67 16.523a.75.75 0 1 1-1.087 1.032L4.206 4.606a.75.75 0 0 1 .028-1.06M7.432 13.002a1.09 1.09 0 0 0-1.285-.398c-.537.206-.79.767-.61 1.26.586 1.618 1.514 3.416 2.695 4.885.62.771 1.861 1.294 3.392 1.452 1.507.156 3.123-.061 4.328-.582a.75.75 0 0 1 .595 1.377c-1.475.638-3.356.875-5.078.697-1.698-.176-3.42-.777-4.406-2.004-1.303-1.62-2.306-3.572-2.937-5.314-.474-1.31.231-2.691 1.484-3.172a2.59 2.59 0 0 1 3.057.947l1.202 1.745a.75.75 0 1 1-1.235.85z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoNotTouchOutline;
