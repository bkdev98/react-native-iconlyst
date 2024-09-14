import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystXboxBold = ({
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
      d="M12.37 11.594a.5.5 0 0 0-.645 0c-1.181 1-4.736 4.266-5.537 6.078-.421.841-.503 1.565.47 2.361.892.726 2.74 1.925 5.212 1.925h.336c2.494 0 4.342-1.199 5.232-1.925.974-.795.892-1.519.48-2.339-.812-1.836-4.366-5.1-5.547-6.1M9.606 8.361c-.207-.184-2.044-1.809-2.81-2.233l-.006-.003c-.58-.31-1.207-.24-1.721.198-.894.753-1.957 2.66-2.274 3.798-.66 2.37-.202 4.794 1.363 7.207a.5.5 0 0 0 .909-.171C5.58 14.669 7.08 12.02 9.65 9.063a.5.5 0 0 0-.045-.702M21.205 10.122c-.317-1.139-1.378-3.045-2.272-3.798-.517-.436-1.145-.509-1.724-.199l-.005.003c-.765.425-2.603 2.05-2.81 2.233a.5.5 0 0 0-.044.702c2.572 2.96 4.072 5.607 4.583 8.093a.499.499 0 0 0 .91.172c1.564-2.414 2.023-4.838 1.361-7.206M8.046 5.091c1.163.167 2.313.89 3.328 1.528l.004.003c.118.074.335.21.39.248a.5.5 0 0 0 .584.003c.052-.037.266-.177.461-.298 1.044-.646 2.124-1.314 3.242-1.485a.5.5 0 0 0 .178-.925c-2.505-1.473-5.853-1.478-8.37 0a.499.499 0 0 0 .183.926"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystXboxBold;
