import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import htmlIcon from './html.svg';
export default class SourceEditor extends Plugin {
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'sourceEditor', locale => {
            const view = new ButtonView( locale );

            view.set( {
                label: 'Html source',
                icon: htmlIcon,
                tooltip: true
            } );

            view.on( 'execute', () => {
                const html = prompt( 'Html', editor.getData() );
                if (html) {
                    editor.setData(html);
                }
            } );

            return view;
        } );
    }
}