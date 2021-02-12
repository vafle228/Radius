document.addEventListener('click', function(event) {
    if(document.getElementById('active') !== null){
        var form = document.getElementById('active');
        var nav = document.getElementsByTagName('nav')[0];
        if(!form.contains(event.target) && !nav.contains(event.target)){
            form.id = 'disactive';
            document.getElementsByTagName('body')[0].style.overflow = 'scroll';
            document.getElementsByTagName('main')[0].style.backgroundColor = '#fff';
            document.getElementsByTagName('main')[0].style.filter = 'brightness(1)';
        }
    }
});
document.getElementsByTagName('a')[1].onclick = function() {
    document.getElementsByTagName('form')[0].id = 'active';
    document.getElementsByTagName('form')[1].id = 'disactive';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    document.getElementsByTagName('main')[0].style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    document.getElementsByTagName('main')[0].style.filter = 'brightness(0.5)';
}
document.getElementsByTagName('a')[2].onclick = function() {
    document.getElementsByTagName('form')[1].id = 'active';
    document.getElementsByTagName('form')[0].id = 'disactive';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    document.getElementsByTagName('main')[0].style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    document.getElementsByTagName('main')[0].style.filter = 'brightness(0.5)';
}


