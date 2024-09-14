import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwipeRight2Bold = ({
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
      d="m15.057 9.368 1.485-4.284a1.752 1.752 0 0 0-3.302-1.173l-3.437 9.444-.556-2.138A1.914 1.914 0 0 0 7.36 9.785c-.999.017-1.815.798-1.816 1.797-.003 1.864.274 4.044.941 6.002 1.05 3.082 6.966 5.056 9.826 3.722 2.241-1.044 4.383-4.058 4.366-6.93-.017-2.854-3.396-3.95-5.62-5.008M8.542 5.36l-.21.373a.79.79 0 0 0 .687 1.18.79.79 0 0 0 .69-.402l1.051-1.866c.014-.018.021-.038.032-.056l.021-.037c.006-.011.005-.023.012-.035a.8.8 0 0 0 .072-.226c.009-.048.006-.094.005-.141-.002-.036.009-.07.003-.107-.002-.013-.012-.023-.015-.037a.8.8 0 0 0-.081-.208q-.013-.03-.029-.058a.8.8 0 0 0-.19-.199l-.013-.01c-.023-.017-.038-.041-.064-.056L8.554 2.37a.791.791 0 0 0-.776 1.378l.224.125c-2.17.667-3.65 1.725-4.568 3.271a.79.79 0 1 0 1.359.807c.715-1.205 1.93-2.044 3.749-2.59"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwipeRight2Bold;
