import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeleteBoldcurved = ({
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
      d="M19.349 10.202a.5.5 0 0 0-.5-.5H5.653a.5.5 0 0 0-.5.5c0 .997-.018 1.926-.035 2.787-.074 3.749-.123 6.226 1.392 7.77 1.076 1.098 2.843 1.588 5.73 1.588 2.89 0 4.66-.491 5.739-1.59 1.522-1.552 1.474-4.041 1.403-7.811-.016-.85-.033-1.764-.033-2.744M20.325 6.378h-4.141c-.041-.654-.222-1.576-.873-2.324-.688-.79-1.718-1.193-3.062-1.193s-2.373.402-3.061 1.193c-.65.748-.833 1.67-.874 2.324H4.175a.75.75 0 0 0 0 1.5h16.15a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeleteBoldcurved;
